// 108_Координаты четверти
var x1 = parseInt(prompt('Введите число x1: '));
var y1 = parseInt(prompt('Введите число y1: '));
var x2 = parseInt(prompt('Введите число x2: '));
var y2 = parseInt(prompt('Введите число y2: '));

var result = String();

if ((x1 > 0 && y1 > 0) && (x2 > 0 && y2 > 0)) {
	var result = 'YES!';
}
else if ((x1 > 0 && y1 < 0) && (x2 > 0 && y2 < 0)) {
	var result = 'YES!';
}
else if ((x1 < 0 && y1 < 0) && (x2 < 0 && y2 < 0)) {
	var result = 'YES!';
}
else if ((x1 < 0 && y1 > 0) && (x2 < 0 && y2 > 0)) {
	var result = 'YES!';
}
else {
	var result = 'NO!';
}






console.log(result);

