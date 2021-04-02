// 138_Трамвай

var n = +prompt('Введите количество остановок:');
var count = 0;
var max = 0;

for (var i = 0; i < n; i++) {
	var result = prompt('Введите результаты раунда:').split(' ').map(item => parseInt(item));
	count-= result[0];
	count+= result[1];
	if (count > max) {
		max = count;
	}
}
console.log(max);