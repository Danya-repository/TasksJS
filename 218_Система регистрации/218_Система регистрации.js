// 218_Система регистрации

var number = +prompt('Введите количество:');
var startArr = Array();
for (var i = 0; i < number; i++) {
	var input = prompt('Введите имя:');
	if (!startArr.includes(input)) {
		startArr.push(input);
		console.log('OK');
	}
	else {
		if (isNaN(parseInt(input[input.length-1]))) { 
			input = input + '1';
		}
		else {
			input = input.slice(0,input.length-1) + (parseInt(input[input.length-1]) + 1);
		}
		startArr.push(input);
		console.log('OK');
	}
}