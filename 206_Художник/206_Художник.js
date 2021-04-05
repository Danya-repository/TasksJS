// 206_Художник

var nm = prompt('Введите размерность холста n и m').split(' ').map(item => parseInt(item));
var n = nm[0];
var m = nm[1];
var countSquare = +prompt('Введите количество прямоугольников');
var startArr = Array();
var countBlack = 0;
for (var i = 0; i < countSquare; i++) {
	var tempoList = prompt('Введите кординаты начальной точки и конечной(все значения через пробелы):').split(' ').map(item => parseInt(item));
	startArr.push(tempoList);
	if (i == 0) {
		min = tempoList[0];
		max = tempoList[3];
	}
	if (tempoList[0] <= min || tempoList[3] >= max) {
		countBlack += (tempoList[2] - tempoList[0]) * (tempoList[3] - tempoList[1]);
		min = tempoList[0];
		max = tempoList[3];
	}
	else {
		countBlack = (max - min)**2;
	}
	// countBlack += (tempoList[2] - tempoList[0]) * (tempoList[3] - tempoList[1]);
}
var uniqList = [];
for (i = 0; i < countSquare; i++) {
	var x = 0;
	var y = 0;
	for (j = 0; j < countSquare; j ++) {
		if (i!=j && !uniqList.includes(i) && !uniqList.includes(j)) {
			uniqList.push(i,j)
			var x = startArr[i].sort((a,b) => a-b)[0] - startArr[j].sort((a,b) => a-b)[0];
			var y = startArr[i].sort((a,b) => a-b)[startArr[i].length-1] - startArr[j].sort((a,b) => a-b)[startArr[i].length-1];
			if (x<0 && y<0) {
				countBlack-=Math.abs(x*y);
			}
		}
	}
}
console.log(n*m - countBlack)

