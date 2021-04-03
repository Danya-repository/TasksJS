// 187_Красивая матрица

var n = 5;
var startArr = Array();
var coordOfOne = Array();
for (var k = 0; k < n; k++) {
	var arrInput = startArr.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}
console.log('--------------------------------------');

for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (startArr[i][j] == 1) {
			console.log(Math.max(i,j) - Math.min(i,j));
		}
	}
}
