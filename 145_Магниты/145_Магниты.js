// 145_Магниты

var n = +prompt('Введите количество магнитов:');
var count = 0;
var prev = ''

for (var i = 0; i < n; i++) {
	var result = prompt('Введите плашечку:');
	if (result[0] != prev) {
		count++;
	}
	prev = result[0];
}
console.log(count);
