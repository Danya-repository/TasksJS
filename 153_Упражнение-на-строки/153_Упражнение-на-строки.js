// 153_Упражнение-на-строки

var events = prompt('Введите строку:').split('');
var result = [];


for (var i of events) {
	var symbol = i;
	if (symbol.charCodeAt() >= 65 && symbol.charCodeAt() <= 90) {
		symbol = String.fromCharCode(symbol.charCodeAt()+32);
	}
	if (symbol.charCodeAt() == 97 || symbol.charCodeAt() == 111 || symbol.charCodeAt() == 121 || symbol.charCodeAt() == 101 || symbol.charCodeAt() == 117 || symbol.charCodeAt() == 73) {
		continue;
		}
	result.push('.' + symbol);
}
console.log(result.join(''));