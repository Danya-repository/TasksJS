// 160_Башни



var firstNumber = +prompt('Введите количество брусков');
var secondNumber = prompt('Введите высоты брусков:').split(' ').map(item => parseInt(item));
var final = {};
var max = 0;
var count = 0;

for (var i of secondNumber) {
	if (typeof final[i] == "undefined") {
		final[i] = 1;
	}
	else {
		final[i]+=1;
	}
}
for (var j in final) {
	count++;
	if (final[j] > max) {
		max = final[j]
	}
}


console.log(max,count);