// 156_Выбор-команд

var count = prompt('Введите k и n').split(' ').map(item => parseInt(item));
var events = prompt('Введите сколько раз учавствовал каждый человек:').split(' ').map(item => parseInt(item));
var summ = count[0];



for (var i of events) {
	if (i + count[1] > 5) {
		summ--;
	}
}
console.log(Math.trunc(summ / 3));