// 197_Матчи

var n = +prompt('Введите n:');
var sum = 0;
var startArr = Array();
for (var k = 0; k < n; k++) {
	startArr.push(prompt('Введите числовой ряд матрицы номер:' + k + 1 + '.').split(' '));
}
console.log('--------------------------------------');


for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if(i!=j) {
			console.log(startArr[i]);
			console.log(startArr[j]);
			if (startArr[i][0] == startArr[j][1]) {
				sum++;
			}
			console.log('--------');
		}
	}
}

console.log(sum);

