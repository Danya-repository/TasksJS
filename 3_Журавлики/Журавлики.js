// Журавлики
var allCount = prompt('Введите количество журавликов сделанных всеми детьми:');

allCount = +allCount; // преобразование строки в число
var delenieNacelo = (allCount / 3);

var katyaCount = delenieNacelo * 2;
var petyaCount = (allCount - katyaCount) / 2;
var seregaCount = petyaCount;

console.log('Петя сделал: ' + petyaCount + ', Серёжа сделал: ' + seregaCount + ', Катя сделала: ' + katyaCount + '.');






















// Деление нацело
// var a = +(prompt('Введите переменную А:'));
// var b = +(prompt('Введите переменную Б:'));

// var result = (a - (a % b)) / b;

// console.log('Результат деления нацело: ' + result);