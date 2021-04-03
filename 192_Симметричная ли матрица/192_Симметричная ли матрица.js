// 184_Транспонирование 1

var n = +prompt('Введите n');
var startArr = Array();
for (var k = 0; k < n; k++) {
	var arrInput = startArr.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}
console.log('--------------------------------------');

var summ = 0;
for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (startArr[i][j] == startArr[j][i]) {
			summ++;
		}
	}
}
console.log(summ == n**2 ? 'yes' : 'no');
