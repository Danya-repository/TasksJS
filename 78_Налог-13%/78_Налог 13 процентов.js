// 78_Налог 13 процентов
var a = +(prompt('Введите размер заработной платы:'));


if (a >= 20000) {
	console.log(a - a * 0.13);
}
else {
	console.log(a);
}