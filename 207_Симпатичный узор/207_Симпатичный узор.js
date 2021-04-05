// 207_Симпатичный узор

var n = 4;
var startArr = Array();
for (var i = 0; i < n; i++) {
	startArr.push(prompt('Введите ряд').split(''));
}
var count = 0;

for (var i = 0; i < n-1; i++) {
	for (var j = 0; j < n-1; j++) {
		if (startArr[i][j] == 'B') {
			if (startArr[i][j+1] == 'B' &&
				startArr[i+1][j+1] == 'B' &&
				startArr[i+1][j] == 'B') {
				count+=1;
			}
		}
		else {
			if (startArr[i][j+1] == 'W' &&
				startArr[i+1][j+1] == 'W' &&
				startArr[i+1][j] == 'W') {
				count+=1;

		}
	}
}
}
console.log(count == 0 ? 'YES' : 'NO');