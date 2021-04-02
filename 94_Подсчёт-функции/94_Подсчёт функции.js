// 93_Билеты на метро
var n = prompt('Введите число: ');

if (n % 2 ==0) {
	var result = n / 2;
}
else {
	var result = -Math.ceil(n / 2);
}
console.log(result);

