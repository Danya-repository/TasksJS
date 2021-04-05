// 203_Спираль

var n = +prompt('Введите n');
var startArr = Array.from(Array(n**2+1).keys()).slice(1);
var finalArr = Array();

for (var l = 0; l < n; l++) {
	temporaryList = Array();
	for (var m = 0; m < n; m++) {
		temporaryList.push('');
	}
	finalArr.push(temporaryList);
}


var direction = 'right';

var i = 0;
var j = -1;

for (var k of startArr) {
	if (direction == 'right') {
		j++;
		finalArr[i][j] = k;
		if (j == n-1 || finalArr[i][j+1] != '') {
			direction = 'bottom';
			continue;
		}
		
	}
	else if (direction == 'bottom') {
		i++;
		finalArr[i][j] = k;
		if (i == n-1 || finalArr[i+1][j] != '') {
			direction = 'left';
			continue;
		}
	}
	else if (direction == 'left') {
		j--;
		finalArr[i][j] = k;
		if (j == 0 || finalArr[i][j-1] != '') {
			direction = 'top';
			continue;
		}
	}
	else if (direction == 'top') {
		i--;
		finalArr[i][j] = k;
		if (i == 0 || finalArr[i-1][j] != '') {
			direction = 'right';
			continue;
		}
	}
}

for (x of finalArr) {
	console.log(x);
}