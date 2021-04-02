// 45_Хотя бы одно делится на 4

var number1 = +(prompt('Введите число: '));
var number2 = +(prompt('Введите число: '));

console.log((number1 % 4 == 0) || (number2 % 4 == 0));