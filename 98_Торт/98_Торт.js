// 97_Баскетбол
var n = prompt('Введите количество гостей: ');

if (n % 2 == 0) {
	console.log(n / 2);
}
else {
	console.log(Math.trunc(n / 2) + (n % 2));
}

