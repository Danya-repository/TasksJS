// 159_Ваня и забор

var firstNumber = prompt('Введите количество друзей и высоту забора').split(' ').map(item => parseInt(item));
var secondNumber = prompt('Введите высоту ребят:').split(' ').map(item => parseInt(item));
var final = 0;

for (var i of secondNumber) {
	if (i > firstNumber[1]) {
		final+=2;
	}
	else {
		final++;
	}
}
console.log(final);