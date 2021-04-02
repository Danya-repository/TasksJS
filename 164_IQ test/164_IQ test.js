// 164_IQ test

var count = +prompt('Введите количество цифр:');
var rowNumbers = prompt('Введите числовой ряд').split(' ').map(item => parseInt(item)); 
var chet = [];
var nechet = []
for (var i of rowNumbers) {
	if (i % 2 == 0) {
		chet.push(rowNumbers.indexOf(i) + 1);
	}
	else {
		nechet.push(rowNumbers.indexOf(i) + 1);
	}
}
console.log(chet.length > nechet.length ? nechet[0] : chet[0]);