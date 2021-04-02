// 124_Вася и носки

var num1 = +prompt('Введите исходное число носков:'); 
var num2 = +prompt('Введите период в который мама покупает дополнительную пару');
var count = 0;

while (num1 > 0) {
	num1--;
	count++;

	if (count % num2 == 0) {
		num1++;
	}
}

console.log(count);