// 163_Слово

var firstNumber = prompt('Введите слово:').split('');
var container = []; 
var low = 0;
var high = 0;

for (var i of firstNumber) {
	if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
		low++;
	}
	else {
		high++;
	}
}
console.log(low > high ? firstNumber.join('').toLowerCase() : ( low == high ? firstNumber.join('').toLowerCase() : firstNumber.join('').toUpperCase()) );