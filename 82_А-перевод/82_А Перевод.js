// 81_Арифметика
var a = prompt('Введите фразу:');
var b = prompt('Введите предполагаемый перевод:');

if (a.split('').reverse().join('') == b) {
	console.log('YES');
}
else {
	console.log('NO');
}