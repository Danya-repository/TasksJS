// 105_Квадратное уравнение
var a = parseInt(prompt('Введите число 1: '));
var b = parseInt(prompt('Введите число 2: '));
var c = parseInt(prompt('Введите число 3: '));
var result = String();

var discriminant = b**2 - 4*a*c;

if (discriminant > 0) {
	var x = (-b + discriminant**0.5) / 2*a;
	var y = (-b - discriminant**0.5) / 2*a;
	var result = x + ' ' + y;
}
else if (discriminant == 0) {
	var x = -b / 2*a;
	var result = x;
}
else {
	var result = 0;
}
console.log(result);

