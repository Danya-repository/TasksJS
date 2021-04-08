// 216_Панграмма

var digit = prompt('Введите строку:');
console.log(digit.split('').filter((item,index,array) => array.indexOf(item) == index).length == 23 ? 'YES' : 'NO');