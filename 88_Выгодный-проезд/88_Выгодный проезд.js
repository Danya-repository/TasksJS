// 88_Выгодный проезд
var n = prompt('Введите сколько поездок на метро необходимо совершить: ');
var m = prompt('Введите количество проездов, которое покрывает абонемент: ');
var a = prompt('Введите цену одного проезда: ').split(' ');
var b = prompt('Введите стоимость абонемента: ').split(' ');

if (n % m == 0) {
	console.log(Math.min(n*a,Math.trunc(n/m)*b));
}
if (n % m != 0) {
	console.log(Math.min(n*a,(Math.trunc(n/m)*b) + b, Math.trunc(n/m)*b + (n%m) * a));
}