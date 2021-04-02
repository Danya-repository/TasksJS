// 135_Куплю лопату

var price = +prompt('Введите цену лопаты:');
var coin = +prompt('Введите номинал монеты:');

var sum = 0;
var counter = 0;

while (true) {
	sum+=price;
	counter++;
	if (sum % 10 == coin || sum % 10 == 0) {
		break;
	}
}

console.log(counter);