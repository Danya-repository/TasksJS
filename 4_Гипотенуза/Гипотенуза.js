// Гипотенуза

var firstKatet = +(prompt('Введите длинну первого катета'));
var secondKatet = +(prompt('Введите длинну второго катета'));


result = (firstKatet**2 + secondKatet**2) ** (1/2);

console.log('Длинна гипотенузы составляет: ' + result);