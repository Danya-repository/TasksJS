// 67_Первое и последнее вхождение

var string = prompt('Введите фразу: ');

var first = string.indexOf('f');
string = string.replace('f',' ');

var second = string.lastIndexOf('f');

var result = String(first) + ' ' + String(second);

console.log(result.replace('indefined','').replaceAll('-1',''));