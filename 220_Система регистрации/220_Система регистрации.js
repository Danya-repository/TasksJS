// 220_Система регистрации

var number = +prompt('Введите количество:');
var startArr = new Set();
for (var i = 0; i < number; i++) {
	var input = prompt('Введите Ваше имя:');
	if (!startArr.has(input)) {
		console.log('OK');
		startArr.add(input);
	}
	else {
		if (isNaN(input.substr(-1))) {
			input = input + '1';
			console.log(input);
			startArr.add(input);
		}
		else {
			input = input.slice(0,input.length-1) + (input.slice(input.length-1)*1 + 1);
			console.log(input);
			startArr.add(input);
		}
	}

}