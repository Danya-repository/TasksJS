// 161_Антон и Даник



var firstNumber = +prompt('Введите количество партий');
var secondNumber = prompt('Введите результаты партий:').split('');
var anton = 0;
var danik = 0;

for (var i of secondNumber) {
	if (i == 'A') {
		anton++;
	}
	else {
		danik++
	}
}
if (anton > danik) {
	console.log('Anton!');
}
else if (danik > anton) {
	console.log('Danik!')
}
else {
	console.log('Friendship!')
}
