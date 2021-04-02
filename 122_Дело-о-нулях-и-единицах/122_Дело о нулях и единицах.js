// 122_Дело о нулях и единицах

var num1 = +prompt('Введите начальную длинну строки'); 
var num2 = prompt('Введите строку:').split(''); 

while ((num2.includes("0")) && (num2.includes("1"))) {
	var indexZero = num2.indexOf("0");
	var indexOne = num2.indexOf("1");

	num2.splice(indexZero,1);
	num2.splice(indexOne,1);

}


console.log(num2.length);