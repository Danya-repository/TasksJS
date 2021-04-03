// 193_Состязания

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
	var summTry = 0;
	for (var j = 0; j < n; j++) {
		summTry+= startArr[i][j];
		if (summTry > maxTry) {
			maxTry = summTry;
			finalArr = Array(maxTry,i);
			// finalArr = [maxTry, i]
		}
	}
}

// console.log(finalArr);
for (var x of finalArr) {
	console.log(x);
}