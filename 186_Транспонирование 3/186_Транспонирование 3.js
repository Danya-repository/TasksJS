// 186_Транспонирование 3

var nm = prompt('Введите n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var startArr = Array();
for (var k = 0; k < n; k++) {
	var arrInput = startArr.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}
console.log('--------------------------------------');

var finalArr = Array();
for (var i = 0; i < n; i++) {
	var arrInput = Array();
	for (var j = m - 1; j >= 0; j--) {
		arrInput.push(startArr[i][j]);
	}
	finalArr.push(arrInput.join(' '));
}

for (var x of finalArr) {
	console.log(x);
}