// 131_Жизнь без нулей

var number1 = +prompt('Введите первое число:');
var number2 = +prompt('Введите второе число:');
var summ = number1 + number2;

var x = parseInt((String(number1).split('').filter(item => item!= "0")).join(''));
var y = parseInt((String(number2).split('').filter(item => item!= "0")).join(''));
var z = parseInt((String(summ).split('').filter(item => item!= "0")).join(''));


if (x + y == z) {
	console.log('YES');
}
else {
	console.log('FALSE');
}
