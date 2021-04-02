// 182_Подарок от Лены


var n = +prompt('Введите n');
var numberRow = prompt('Введите числовой ряд').split(' ').map(item => parseInt(item));
var etalon = numberRow.slice().sort((a,b) => a-b).reverse();
console.log(etalon)
maxsum = 0;
prev = 0;

for (var i of etalon) {
	// prev++;
	var etalon = numberRow.slice().sort((a,b) => a-b).reverse();
	if (prev <= numberRow.indexOf(i)) {
		maxsum+=((numberRow.indexOf(i) + 1) * i);
		numberRow = numberRow.slice(numberRow.indexOf(i) + 1)
		prev = numberRow.indexOf(i);
	}
}
console.log(maxsum);
