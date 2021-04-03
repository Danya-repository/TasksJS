// 190_Двумерный массив

var nm = prompt('Введите n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var summRow = 0;
var summCol = 0;
var summRowArr = Array();
var summColArr = Array();
var finalArr = Array();

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
	var summRow = 0;
	for (var j = 0; j < m; j++) {
		summRow+=startArr[i][j];
	}
	summRowArr.push(summRow);
}

for (var i = 0; i < m; i++) {
	var summCol = 0;
	for (var j = 0; j < n; j++) {
		summCol+=startArr[j][i];
	}
	summColArr.push(summCol);
}
finalArr.push(summRowArr, summColArr);

for (var l of finalArr) {
	console.log(l.join(' '));
}

for (var z of startArr) {
	console.log(z.slice().join(' '),'\n');
}

