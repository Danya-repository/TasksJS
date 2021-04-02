// 132_Апельсины

var arrNumbers = prompt('Введите числа через пробел:').split(' ').map(item => parseInt(item));
console.log(arrNumbers);
var a = Math.max(arrNumbers[0],arrNumbers[1]); 
var b = Math.min(arrNumbers[0],arrNumbers[1]); 

var x = a;
var y = b;

while (y > 0) {
	var NOD = y;
	y = x % y;
	x = NOD;
}
NOK = a * b / NOD;

console.log(NOK / a);