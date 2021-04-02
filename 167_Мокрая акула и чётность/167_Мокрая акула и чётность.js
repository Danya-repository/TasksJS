// 167_Мокрая акула

var sum = 0;
var rowNumbers = prompt('Введите числовой ряд').split(' ').map(item => parseInt(item)).sort();
rowNumbers.forEach(item => sum+=item);

for (var i of rowNumbers) {
	if (sum % 2 == 0) {
		break;
	}
	sum-=i;
}
console.log(sum);
