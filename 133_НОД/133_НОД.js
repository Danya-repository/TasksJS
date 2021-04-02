// 133_НОД

var a = +prompt('Введите число А:');
var b = +prompt('Введите число Б');


while (b > 0) {
	c = b%a
	a = b;
	b = c;
}
console.log(a);