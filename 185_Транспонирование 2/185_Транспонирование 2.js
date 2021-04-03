// 185_Транспонирование 2

var n = +prompt('Введите n');
var startArr = Array();
for (var k = 0; k < n; k++) {
	var arrInput = startArr.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}
console.log('--------------------------------------');

var finalArr = Array();
for (var i = n - 1; i >= 0; i--) {
	var arrInput = Array();
	for (var j = n - 1; j >= 0; j--) {
		arrInput.push(startArr[j][i]);
	}
	finalArr.push(arrInput.join(' '));
}

for (var x of finalArr) {
	console.log(x);
}