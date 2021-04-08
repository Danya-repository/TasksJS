// 219_Single number

var digit = prompt('Введите строку:');
var counter = 0;

if (digit.length == 3) {
	digit = digit.slice(1,digit.length-1).split('');
}
else {
	digit = digit.slice(1,digit.length-1).split(',')
}

for (var i = 0; i < digit.length; i++) {
	if (!digit.slice(0,i).includes(digit[i]) && !digit.slice(i+1).includes(digit[i])){
		console.log(digit[i]);
		break;
	}
	else {
		counter++;
		if (counter==digit.length) {
			console.log(-1);
		}
	}
}
