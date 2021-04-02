// 101_Петя и строки
var n = prompt('Введите первую строку: ');
var m = prompt('Введите вторую строку: ');

if (n.toLowerCase() < m.toLowerCase()) {
	console.log('-1');
}
else if (n.toLowerCase() > m.toLowerCase()) {
	console.log('1');
}
else {
	console.log('0');
}
