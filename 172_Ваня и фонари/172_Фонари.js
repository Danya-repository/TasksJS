// 172_Фонари

var count = prompt('Введите количество фонарей и длинну улицы:').split(' ').map(item => parseInt(item));
var start = prompt('Введите числовой ряд').split(' ').sort((a,b) => a-b).map(item => parseInt(item));
console.log(start)
var max = 0;
var prev = 0;
for (var i of start) {
	if (i - prev > max) {
		max = i - prev;
	}
	prev = i;
}
console.log(Math.max(max / 2,Math.max(start[0]-0,count[1] - start[start.length - 1])));