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

var finalArr = Array();
for (var i = 0; i < n; i++) {
	var arrInput = Array();
	for (var j = 0; j < n; j++) {
		arrInput.push(startArr[j][i]);
	}
	finalArr.push(arrInput.join(' '));
}

for (var x of finalArr) {
	console.log(x);
}