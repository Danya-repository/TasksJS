// 179_Таблица умножения

var x = prompt('Введите размерность таблицы и искомый элемент').split(' ').map(item => parseInt(item));
var result = 0;
for (var i = 1; i <= x[0]; i++) {
	for (var j = 1; j <= x[0]; j++) {
		if (i*j == x[1]) {
			result++;
		}
	}
}
console.log(result)

