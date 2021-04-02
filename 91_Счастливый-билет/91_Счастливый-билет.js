// 91_Счастливый-билет
var n = prompt('Введите номерок билета: ');

if (parseInt(n[0])+parseInt(n[1])+parseInt(n[2]) == parseInt(n[3])+parseInt(n[4])+parseInt(n[5])) {
	console.log('YES');
}
else {
	console.log('NO');
}
