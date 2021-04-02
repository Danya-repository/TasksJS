// 72_B. A и B и ошибки компиляции

var count = prompt('Введите изначальное количество элементов:');
var firstString = prompt('Введите первую строку:').split(' ').sort();
var secondString = prompt('Введите вторую строку:').split(' ').sort();
var thirdString = prompt('Введите третью:').split(' ').sort();
// var firstString = '1 4 3 3 5 7'.split(' ').sort();
// var secondString = '3 7 5 4 3'.split(' ').sort();
// var thirdString = '4 3 7 5'.split(' ').sort();
var result = [];
var indexList =[];




var forCicleSecondString = secondString.slice();
for (var i = 0; i < firstString.length; i+=1) {
	if (secondString.indexOf(firstString[i]) == -1) {
		result.push(firstString[i]);
	}
	else {
		delete secondString[secondString.indexOf(firstString[i])];
	}
}

var secondString = forCicleSecondString;

for (var i = 0; i < secondString.length; i+=1) {
	if (thirdString.indexOf(secondString[i]) == -1) {
		result.push(secondString[i]);
	}
	else {
		delete thirdString[thirdString.indexOf(secondString[i])];
	}
}
console.log(result);