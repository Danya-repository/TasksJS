// 119_Список квадратов

var num = +prompt('Введите число:');
var count = 0;
while (true) {
	count++;
	if (count**2 < num) {
		console.log(count**2);
		continue;
	}
	break;
	
}
console.log('Поехали!')