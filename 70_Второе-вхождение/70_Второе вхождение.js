// 70_Второе вхождение

var string = prompt('Введите фразу: ');

var first = string.indexOf('f');

var second = string.lastIndexOf('f');

var result = Math.min((first + second), second);

console.log(result);