// 86_Существует ли треугольник
var a = prompt('Введите a: ');
var b = prompt('Введите b: ');
var c = prompt('Введите c: ');


if ((a+b > c) && (a+c > b) && (b+c > a)) {
	console.log('YES');
}
else {
	console.log('NO');
}
