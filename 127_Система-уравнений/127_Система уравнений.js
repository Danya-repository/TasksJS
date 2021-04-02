// 127_Система уравнений

var n = +prompt('Введите n:');
var m = +prompt('Введите m:');
var a = 0;
var b = 0;
var count = 0;

while (a**2 <= n) {
	b = n - a**2;
	if (a + b ** 2 == m) {
		count++;
	}
	a++;
}
console.log(count);
