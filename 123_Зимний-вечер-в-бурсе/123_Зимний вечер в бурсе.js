// 123_Зимний вечер в бурсе

var num1 = +prompt('Введите число:'); 

while ((String(num1)[0] != 1) && (num1 < 1000000000)) {
	num1 = num1 * String(num1)[0];
}
console.log(num1);