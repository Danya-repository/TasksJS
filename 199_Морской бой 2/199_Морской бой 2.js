// 199_Морской бой 2

var nm = prompt('Введите n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var startArr = Array();
var count=0;
for (var k = 0; k < n; k++) {
	startArr.push(prompt('Введите числовой ряд:').split(''));
}

for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		if (startArr[i][j] == '.') {
			if (
				(startArr[i-1>= 0 ? i-1 : i][j] != '*') &&
				(startArr[i+1< n ? i+1 : i][j] != '*') &&
				(startArr[i][j-1>= 0 ? j-1 : j] != '*') &&
				(startArr[i][j-1< m ? j-1 : j] != '*')
				) 
			{
				count++;
			}
		}
	}
}

console.log(count);