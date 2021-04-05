// 209_Треугольник паскаля

var nm = prompt('Введите n и m:').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
startArr = Array();

for (var i = 0; i < n; i++) {
	tempoList = Array();
	for (var j = 0; j < m; j++) {
		tempoList.push('');
	}
	startArr.push(tempoList);
}



for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if(i==0 || j==0) {
			startArr[i][j] = '1';
		}
		if (i!=0 && j!=0) {
			startArr[i][j] = parseInt(startArr[i][j-1]) + parseInt(startArr[i-1][j]);
		}
	}
}

// console.log(startArr[n-1][n-1]);