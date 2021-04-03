// 189_Сумма главной диагонали

var n = +prompt('Введите n');
var startArr = Array();
var summ = 0;
for (var k = 0; k < n; k++) {
	var arrInput = startArr.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}
console.log('--------------------------------------');

for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (i == j) {
			summ+=startArr[i][j];
		}
	}
}

console.log(summ);