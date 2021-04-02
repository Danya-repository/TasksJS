// Эния

var countPanel = +(prompt('Введите количество панелей: '));
var aSize = +(prompt('Введите размер А: '));
var bSize = +(prompt('Введите размер Б: '));

result = (( aSize * bSize ) * countPanel) * 2;

console.log('Необходимо: ' + result + ' нанограмм.');