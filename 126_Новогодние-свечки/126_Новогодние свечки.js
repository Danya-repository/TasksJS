// 126_Новогодние свечки

var candles = +prompt('Введите исходное количество свечей:'); 
var candlesForRepeat = +prompt('Введите количество свечей из которых можно сделать новую свечу:');
var countHours = 0;
var garbage = 0;

while (true) {
	candles--;
	garbage++;
	countHours++;
	if (candles == 0 && Math.trunc(garbage / candlesForRepeat) > 0) {
		candles += Math.trunc(garbage / candlesForRepeat);
		garbage = garbage % candlesForRepeat;
		continue;
	}
	else if (candles == 0 && Math.trunc(garbage / candlesForRepeat) == 0) {
		break;
	}
}
console.log(countHours);
