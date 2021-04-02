// 75_Новый год встреча друзей

var string = prompt('Введите строку:').split(' ');

console.log(Math.max(string[0], string[1], string[2]) - Math.min(string[0], string[1], string[2]));