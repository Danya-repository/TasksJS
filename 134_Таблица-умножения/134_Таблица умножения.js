// 134_Таблица умножения

var n = +prompt('Введите число n:');
var x = +prompt('Введите число x:');
var counter = 0;

var i = 1;
var j = 1;

while (i <= n) {
	j = 1;
	while (j <= n) {
		if (i * j == x) {
			counter++;
		}
		j++;
	}
	i++;
}

console.log(counter);