// 136_Мишка и игра

var n = +prompt('Введите количество раундов:');
var mishka = 0;
var chris = 0;

for (var i = 0; i < n; i++) {
	var result = prompt('Введите результаты раунда:').split(' ').map(item => parseInt(item));
	if (result[0] > result[1]) {
		mishka++;
	}
	else if (result[0] < result[1]) {
		chris++;
	}
	else {
		mishka++;
		chris++;
	}
}

if (mishka > chris) {
	console.log('Mishka');
}
else if (mishka < chris) {
	console.log('Chris');
}
else {
	console.log('Friendship');
}