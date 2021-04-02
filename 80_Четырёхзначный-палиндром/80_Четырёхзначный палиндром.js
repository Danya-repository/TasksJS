// 79_Максимум из двух чисел
var a = prompt('Введите число:');

var b = a.substring(2,4);

if (a.substr(0,2) == b.split('').reverse().join('') ) {
	console.log('YES');
}
else {
	console.log('NO');
}