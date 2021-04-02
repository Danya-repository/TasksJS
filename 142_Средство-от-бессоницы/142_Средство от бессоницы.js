// 142_Средство от бессоницы

var k = +prompt('Введите k');
var l = +prompt('Введите l');
var m = +prompt('Введите m');
var n = +prompt('Введите n');
var d = +prompt('Введите d');

var counter = 0;


for (var i = 1; i <= d; i++) {
	if (i % k == 0) {
		counter++;
	}
	else if (i % l == 0) {
		counter++;
	}
	else if (i % m == 0) {
		counter++;
	}
	else if (i % n == 0) {
		counter++;
	}
}
console.log(counter);
