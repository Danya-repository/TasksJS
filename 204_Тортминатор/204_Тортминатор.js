// 204_Тортминатор

var n = +prompt('Введите n');
var m = +prompt('Введите m');
var startArr = Array();
var finalcounter = 0;
for (var i = 0; i < n; i++) {
	startArr.push(prompt('Введите ряд из кусочков торта').split(''));
}

var firstPosArr = startArr;
var secondPosArr = Array();

for (var k = 0; k < n; k++) {
	if (startArr[k].includes('S')) {
		continue;
	}
	else {
	for (var l = 0; l < m; l++) {
		startArr[k][l]='';
		finalcounter+=1;
		}
	}
}
for (var z = 0; z < m; z++) {
	var temporaryList = Array();
	for (var x = 0; x < n; x++) {
		temporaryList.push(startArr[x][z])
	}
	secondPosArr.push(temporaryList);
}
console.log(startArr);
startArr = secondPosArr;
console.log(secondPosArr);

for (var v = 0; v < m; v++) {
	if (startArr[v].includes('S')) {
		continue;
	}
	else {
	for (var b = 0; b < n; b++) {
		if (startArr[v][b] == '.') {
			finalcounter++;
			startArr[v][b]='';
		}
	}
}

}