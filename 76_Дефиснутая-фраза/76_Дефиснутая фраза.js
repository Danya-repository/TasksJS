// 76_Дефиснутая фраза

var string = prompt('Введите строку:').split(' ');
var string = (string[0] + string[1]).toUpperCase().replaceAll('','-');
console.log(string.slice(1,string.length - 1));
