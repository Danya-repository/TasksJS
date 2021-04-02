// 147_Удалить каждый третий символ

var str = prompt('Введите строку:');
var result = '';
for (var i = 0; i < str.length; i++) {
	if (i % 3 != 0) 
		result = result + str[i];
}
console.log(result);
