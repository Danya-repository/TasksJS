// 102_Кнопочные гонки
var s = parseInt(prompt('Введите количество символов: '));
var v1 = parseInt(prompt('Введите скорость ввода первого участника: '));
var v2 = parseInt(prompt('Введите скорость ввода второго участника: '));
var t1 = parseInt(prompt('Введите пинг первого участника: '));
var t2 = parseInt(prompt('Введите пинг второго участника участника: '));

var first = t1 * 2 + s * v1;
var second = t2 * 2 + s * v2;

if (first < second) {
	console.log('FIRST');
}
else if (second < first) {
	console.log('SECOND');
}
else {
	console.log('Friendship!')
}