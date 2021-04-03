// 195_Состязания 3

var nm = prompt('Введите n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var startArr = Array();
var maxTry = 0;

for (var k = 0; k < n; k++) {
	startArr.push(prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item)));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}
console.log('--------------------------------------');

for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (startArr[i][j] > maxTry) {
			maxTry = startArr[i][j];
			finalArr = Array(String(i));
		} 
	}
}

for (var x of finalArr) {
	console.log(x);
}