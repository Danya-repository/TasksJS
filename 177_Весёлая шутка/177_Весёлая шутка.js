// 177_Весёлая шутка
// var count = prompt('Введите количество шариков и количество друзей соответственно:');





var startVocab = {};
var finalVocab = {};
var startRow = (prompt('Введите первое имя').split('')).concat(prompt('Введите второе имя').split('')).forEach(item => !(item in startVocab) ? startVocab[item] = 1 : startVocab[item]+=1);
var finalRow = (prompt('Введите буквы из кучки:').split('')).forEach(item => !(item in finalVocab) ? finalVocab[item] = 1 : finalVocab[item]+=1);
var counter = 0;

for (var i in startVocab) {
	if(i in finalVocab && startVocab[i] == finalVocab[i]) {
		counter++;
		continue;
	}
}
console.log(Object.keys(startVocab).length == counter ? "YES" : "NO");