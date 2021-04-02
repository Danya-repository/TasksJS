// Шнурки 2 1 3 4

var distanceBetweenColumn = +(prompt('Введите расстояние между рядами')); 
var distanceBetweenPointInColumn = +(prompt('Введите расстояние между отверстиями в ряду'));
var lenthFree = +(prompt('Введите длинну свободного конца'));
var countPointInColumn = +(prompt('Введите количество отверстий в ряду'));

lengthInColumn = (((countPointInColumn - 1) * 2) * distanceBetweenPointInColumn) + 2 * lenthFree;
lengthInRow = (countPointInColumn * distanceBetweenColumn * 2) - distanceBetweenColumn;
result = lengthInColumn  + lengthInRow;

console.log('Общая длинна шнурка: ' + result + ' см.');

