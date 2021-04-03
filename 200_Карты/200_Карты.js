// 200_Карты


var n = +prompt('Введите n');
var startArr = prompt('Введите числовой ряд:').split(' ').map(item => parseInt(item));
var maxValue = (startArr.slice().sort((a,b) => a-b))[0] + (startArr.slice().sort((a,b) => a-b)).reverse()[0];
console.log(maxValue)

var finalArr = Array();
for (var i = 0; i < n; i++) {
	var arrInput = Array();
	for (var j = 0; j < n; j++) {
		if(i!=j) {
			if (startArr[i]+startArr[j] == maxValue) {
				arrInput.push(i+1,j+1);
				delete startArr[i];
				delete startArr[j];
			}
		}
	}
	if (arrInput.length > 0) {
		finalArr.push(arrInput);
	}
}
for (var i of finalArr) {
	console.log(i.join(' '));
}
