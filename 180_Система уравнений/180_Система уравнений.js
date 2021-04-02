// 180_Система уравнений

var nm = prompt('Введите n и m').split(' ').map(item => +item);
var result = 0;
for (var i = 0; i < nm[0]; i++) {
	for (var j = 0; j < nm[1]; j++) {
		if (i**2 + j == nm[0] && i + j**2 == nm[1]) {
			result++;
		}
	}
}
console.log(result);