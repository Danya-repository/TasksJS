// 13_А. Выражение

var a = +(prompt('Введите первое число'));
var b = +(prompt('Введите второе число'));
var c = +(prompt('Введите третье число'));

summa_1 = a + b + c;
summa_2 = a + b * c;
summa_3 = a * b + c;
summa_4 = a * b * c;
summa_5 = (a + b) * c;
summa_6 = a * (b + c);

result = Math.max(summa_1, summa_2, summa_3, summa_4, summa_5, summa_6);

console.log('Максимальное значение: ' + result + '.');

