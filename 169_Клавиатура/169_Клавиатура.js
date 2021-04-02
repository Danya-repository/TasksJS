// 169_Клавиатура



var massiv = 'qwertyuiop[asdfghjkl;zxcvbnm,';
var luft = prompt('Введите сдвиг');
var rowNumbers = prompt('Введите строку').toLowerCase().split('');
var result = [];

for (var i of rowNumbers) {
	if (luft == "R" || luft == "r") {
		result.push(massiv[massiv.indexOf(i) - 1]);
	}
	else if (luft == "L" || luft == "l") {
		result.push(massiv[massiv.indexOf(i) + 1]);
	}
}
console.log(result.join(''))
