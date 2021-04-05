// 202_Фотографии Брейна


var n = +prompt('Введите n');
var m = +prompt('Введите m');

var value = 0;
var finalArr = Array();
var startArr = Array();

for (var k = 0; k < n; k++) {
	startArr.push(prompt('Введите цвета пикселей в ряду:').split(' '));
}
var countColor = 0;

for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		if (startArr[i][j] == 'C' ||
			startArr[i][j] == 'M' ||
			startArr[i][j] == 'Y' ||
			startArr[i][j] == 'G') {
			countColor++;
		}
	}
}

console.log(countColor > 0 ? '#Color' : '#Black&White');