// 210_Девушка или юноша

var string = prompt('Введите имя').split('').filter((item,index,array) => (array.indexOf(item) === index));
console.log(string.length % 2 == 0 ? 'CHAT WITH HER!' : 'IGNORE HIM!');