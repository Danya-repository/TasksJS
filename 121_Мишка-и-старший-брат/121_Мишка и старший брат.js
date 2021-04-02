// 121_Мишка и старший брат

var num1 = +prompt('Введите вес Лимака:'); 4 
var num2 = +prompt('Введите вес Боба:'); 9
var count = 0;

while (num1 <= num2) {
	num1 = num1 * 3;
	num2 = num2 * 2;
	count++;

}
console.log(count)