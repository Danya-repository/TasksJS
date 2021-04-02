// 103_Чет и нечет
var x = parseInt(prompt('Введите число: '));
var y = parseInt(prompt('Введите искомую позицию: '));

if (x % 2 == 0) {
	var midLine = x / 2;
	if (y <= midLine) {
		var result = y * 2 - 1;
	}
	else {
		if (y == x) {
			var result = y;
		}
		else {
			var result = y % midLine * 2;
		}
	}
}
else {
	var midLine = Math.trunc(x / 2) + 1;
	if (y <= midLine) {
		var result = y * 2 - 1;
	}
	else {
		var result = y % midLine * 2;
	}
}
console.log(result);

