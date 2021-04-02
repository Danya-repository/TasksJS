// 146_Завидный забор

var n = +prompt('Введите количество тестов:');

for (var i = 0; i < n; i++) {
	var result = +prompt('Введите угол:');
	if (360 % (180 - result) == 0) {
		console.log('YES');
	}
	else {
		console.log('NO');
	}
}
