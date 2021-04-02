// 144_Юный физик

var n = +prompt('Введите действующих сил:');
var x = 0;
var y = 0;
var z = 0;

for (var i = 0; i < n; i++) {
	var result = prompt('Введите результаты раунда:').split(' ').map(item => parseInt(item));
	x+=result[0];
	y+=result[1];
	z+=result[2];
}

if (x == 0 && y == 0 && z == 0) {
	console.log('YES');
}
else {
	console.log('NO');
}

