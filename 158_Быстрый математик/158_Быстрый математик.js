// 158_Быстрый математик

var firstNumber = prompt('Введите первое число:');
var secondNumber = prompt('Введите второе число:');
var final = [];

for (var i = 0; i < firstNumber.length; i++) {
	if (firstNumber[i] != secondNumber[i]) {
		final.push(1);
	}
	else {
		final.push(0);
	}
}
console.log(final.join(''));