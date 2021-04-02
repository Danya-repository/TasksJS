// 162_Свободная касса

var firstNumber = +prompt('Введите количество поситетелей:');
var container = []; 
var count = 1;

for (var i = 0; i < firstNumber; i++) {
	var time = prompt('Введите время в которое придёт посетитель');
	if (container.includes(time)) {
		count++;
	}
	else {
		container.push(time);
	}
}
console.log(count);