// 133_Эпическая битва

var arrNumbers = prompt('Введите числа через пробел:').split(' ').map(item => parseInt(item));
var a = arrNumbers[0];
var b = arrNumbers[1];
var n = arrNumbers[2];

function NOD(x,y) {

	max = Math.max(x,y);
	min = Math.min(x,y);

	while (min > 0) {
	var result = min;
	min = max % min;
	max = result;
	}
	return result;
}
var counter = 0;
var count = 0;
var win;
while (n >= 0) {
	if (count % 2 == 0) {
		var nodSemena = NOD(a,n);
		n-=nodSemena;
		count++;
		win = 1;
	}
	else {
		var nodAntisemena = NOD(b,n);
		n-=nodAntisemena;
		count++;
		win = 0;
	}

	counter++;
	if (counter > 100) {
		break;
	}
}
console.log(win)