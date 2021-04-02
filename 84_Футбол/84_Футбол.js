// 84_Футбол
var startPosition = prompt('Введите расстановку игроков: ');


if ( startPosition.includes('1111111') || startPosition.includes('0000000')) {
	console.log('YES');
}
else {
	console.log('NO');
}

