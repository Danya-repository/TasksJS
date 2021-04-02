// 69_Переставить два слова

var string = prompt('Введите фразу: ');

string = string.split(' ').reverse().join(' ');

// string = string.replace(string.substring(first,second + 1),'');
// string = string.replace(string.substr(first, second - first + 1),'');


console.log(string);

