// 68_Удаление фрагмента

var string = prompt('Введите фразу: ');

var first = string.indexOf('h');
string = string.replace('h',' ');

var second = string.lastIndexOf('h');

// string = string.replace(string.substring(first,second + 1),'');
// string = string.replace(string.substr(first, second - first + 1),'');


console.log(string.slice(0,first) + string.slice(second + 1));

