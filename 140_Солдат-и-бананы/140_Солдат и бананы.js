// 140_Солдат и бананы

var n = +prompt('Введите стоимость первого банана:');
var x = +prompt('Введите количество денег в наличии:');
var m = +prompt('Введите сколько бананов нужно купить:');

for (var i = 1; i <= m; i++) {
	x-=(i*n);
}
console.log(x*-1);
