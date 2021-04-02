// 97_Баскетбол
var n = prompt('Введите результаты первой партии: ').split(' ');
var m = prompt('Введите результаты второй партии: ').split(' ');
var v = prompt('Введите результаты третьей партии: ').split(' ');
var c = prompt('Введите результаты четвертой партии: ').split(' ');

var first = parseInt(n[0]) + parseInt(m[0]) + parseInt(v[0]) + parseInt(c[0]);
var second = parseInt(n[1]) + parseInt(m[1]) + parseInt(v[1]) + parseInt(c[1]);

if (first > second) {
	console.log('1');
}
else if (second > first) {
	console.log('2');
}
else {
	console.log('DRAW');
}

