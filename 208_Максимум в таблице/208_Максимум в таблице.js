// 208_Максимум в таблице

var n = +(prompt('Введите n:'));

startArr = Array();

for (var i = 0; i < n; i++) {
	startArr.push(Array(n));
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

console.log(startArr[n-1][n-1]);