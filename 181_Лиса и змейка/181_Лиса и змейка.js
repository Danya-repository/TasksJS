// 181_Лиса и змейка

var nm = prompt('Введите n и m').split(' ').map(item => +item);
var result = 0;
var j = 0;
for (var i = 1; i <= nm[0]; i++) {
	
	console.log('#'.repeat(nm[1]));
	if (i + j == nm[0]) {
		break;
	}
	for (j; j< nm[0]; j++) {
		if (j%2 == 0) {
			console.log('.'.repeat(nm[1] - 1) + '#');

		}
		else {
			console.log('#' + '.'.repeat(nm[1] - 1));
			}
		j++;
		break;
	}
	
}
// console.log(result);