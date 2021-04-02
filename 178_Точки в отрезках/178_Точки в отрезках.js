// 178_Точки в отрезках

var nl = prompt('Введите количество отрезков и верхнюю границу').split(' ').map(item => parseInt(item));
var n = nl[0];
var l = nl[1];

var result = Array.from(Array(l + 1).keys()).splice(1);
console.log(result)


for (var i = 0; i < n; i++) {
	var vector = prompt('Введите координаты отрезка номер ' + i+1).split(' ').map(item => parseInt(item));
	console.log(vector)
	for (var j = vector[0]; j <= vector[1]; j++) {
		if (result.includes(j)) {
			result.splice(result.indexOf(j),1)
		}
	}
}
console.log(result.length, result);