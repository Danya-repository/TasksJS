// 106_Тип-треугольника
var a = parseInt(prompt('Введите число 1: '));
var b = parseInt(prompt('Введите число 2: '));
var c = parseInt(prompt('Введите число 3: '));
var result = String();

if ((a**2 == b**2 + c**2) || (b**2 == a**2 + c**2) || (c**2 == a**2 + b**2)) {
	var result = 'rigth';
}
else if ((a**2 < b**2 + c**2) || (b**2 < a**2 + c**2) || (c**2 < a**2 + b**2)) {
	var result = 'acute';
}
else if ((a**2 > b**2 + c**2) || (b**2 > a**2 + c**2) || (c**2 > a**2 + b**2)) {
	var result = 'obtuse';
}
else {
	var result = 'impossible';
}

console.log(result);

