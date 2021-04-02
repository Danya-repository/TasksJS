// 168_Панграмма

var result = [];
var sum = 0;
var rowNumbers = prompt('Введите строку').toLowerCase().split('').sort();

for (var i of rowNumbers) {
	if (!result.includes(i)) {
		result.push(i);
	}
}
console.log(result.length == 26 ? "YES!" : "NO");