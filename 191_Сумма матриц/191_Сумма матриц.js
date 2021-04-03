// 191_Сумма матриц

var nm = prompt('Введите n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var firstMatrix = Array();
var secondMatrix = Array();
var finalArr = Array();
for (var k = 0; k < n; k++) {
	var arrInput = firstMatrix.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var k = 0; k < n; k++) {
	var arrInput = secondMatrix.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

console.log('--------------------------------------');

var finalArr = Array();
for (var i = 0; i < n; i++) {
	var arrInput = Array();
	for (var j = 0; j < m; j++) {
		arrInput.push(firstMatrix[i][j] + secondMatrix[i][j]);
	}
	finalArr.push(arrInput.join(' '));
}

for (var x of finalArr) {
	console.log(x);
}