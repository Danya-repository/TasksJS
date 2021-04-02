// Расстояние между двумя точками

var x1 = +(prompt('Введите х1:'));
var x2 = +(prompt('Введите x2:'));


result = Math.max(x1, x2) - Math.min(x1, x2);
console.log('Расстояние между точками составляет: ' + result + ' см.');

