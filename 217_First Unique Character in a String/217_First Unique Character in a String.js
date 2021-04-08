// 217_First Unique Character in a String

var digit = prompt('Введите строку:').split('');
var counter = 0;
for (var i = 0; i < digit.length; i++) {
	if (!digit.slice(0,i).includes(digit[i]) && !digit.slice(i+1).includes(digit[i])){
		console.log(i);
		break;
	}
	else {
		counter++;
		// if (counter==digit.length-1) {
		// 	console.log(-1);
		// }
	}
}
