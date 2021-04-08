// 211_Почти счастливео число

var string = prompt('Введите имя').split('').filter((item,index,array) => array.indexOf(item) === index).map(item => parseInt(item));
console.log(string.length == 2 && string.includes(4) && string.includes(7) ? 'YES' : 'NO');