// 137_Bit++

var n = +prompt('Введите количество раундов:');
var x = 0;

for (var i = 0; i < n; i++) {
	var result = prompt('Введите результаты раунда:');
	if (result == "X++" || result == "++X") {
		x++;
	}
	else if (result == "X--" || result == "--X") {
		x--;
	}
}
console.log(x);