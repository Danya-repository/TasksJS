// 33_Парты

var firstClass = +(prompt('Введите количество учеников в первом классе:'));
var secondClass = +(prompt('Введите количество учеников во втором классе:'));
var thirdClass = +(prompt('Введите количество учеников в третьем классе:'));

var countKids = firstClass + secondClass + thirdClass;

// console.log('Потребуется ' + (Math.ceil(countKids / 2)) + ' парт.');


console.log('Потребуется ' + (((countKids - (countKids % 2)) + ((countKids % 2) * 2)) / 2) + ' парт.');

