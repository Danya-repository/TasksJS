// 196_Миша и негатив

var nm = prompt('Введите n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var startArr = Array();
var finalArr = Array();
var sum = 0;
for (var k = 0; k < n; k++) {
	startArr.push(prompt('Введите числовой ряд первой матрицы:').split(''));
}
for (var l = 0; l < n; l++) {
	finalArr.push(prompt('Введите числовой ряд второй матрицы:').split(''));
}

console.log('--------------------------------------');


for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		if (startArr[i][j] == finalArr[i][j]) {
			sum++;
		}
	}
}

console.log(sum);
