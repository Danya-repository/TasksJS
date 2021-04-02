// 173_Близнецы
var count = +prompt('Введите количество монет:');
var start = prompt('Введите числовой ряд').split(' ').sort((a,b) => a-b).map(item => parseInt(item)).reverse();
var sum = 0;
var counter = 0;

for (var i = 0; i < count; i++) {
	sum+=start[i];
	counter++;
	if (sum > start.slice(i).reduce((add,item) => add+=item)) {
		console.log(counter);
		break;
	}
}
