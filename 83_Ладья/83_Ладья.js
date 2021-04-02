// 83_Ладья
var startPosition = prompt('Введите стартовую позицию').split(' ');
var finishPosition = prompt('Введите финишную позицию:').split(' ');

if ( (startPosition[0] == finishPosition[0]) || (startPosition[1] == finishPosition[1]) ) {
	console.log('YES');
}
else {
	console.log('NO');
}