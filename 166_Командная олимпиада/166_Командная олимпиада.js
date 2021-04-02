// 166_Командная олимпиада

var rowNumbers = prompt('Введите числовой ряд').split(' ').map(item => parseInt(item));
var one = [];
var two = [];
var three = [];

var minCount = 0;

for (var i = 0; i < rowNumbers.length; i++) {
	if (rowNumbers[i] == 1) {
		one.push(i + 1);
	}
	else if (rowNumbers[i] == 2) {
		two.push(i + 1);
	}
	else if (rowNumbers[i] == 3) {
		three.push(i + 1)
	}
}

var min = Math.min(one.length, two.length, three.length);
var i = 0;

if ( min > 0 ) {
	while (i < min) {
		console.log(one[i],two[i],three[i])
		i++;
	}
}
else {
	console.log(0);
}
