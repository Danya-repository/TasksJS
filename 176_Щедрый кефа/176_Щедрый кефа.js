// 176_Щедрый кефа
var count = prompt('Введите количество шариков и количество друзей соответственно:');
var stringRow = prompt('Введите цвета').split('');
var startVocab = {};

for (var i of stringRow) {
	if (!(i in startVocab)) {
		startVocab[i] = 1;
	}
	else {
		startVocab[i]+=1;
	}
}

var forSortArr = []

for (var i in startVocab) {
	forSortArr.push(startVocab[i]);
}

forSortArr.sort((a,b) => a-b);

if (forSortArr[forSortArr.length - 1] == forSortArr.slice(0,forSortArr.length - 1).reduce((adder,item) => adder+=item)) {
	console.log('YES');
}
else {
	console.log('NO');
}
