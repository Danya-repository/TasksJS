// 31_Электронные часы 1

var countMinuts = +(prompt('Введите исходное количество минут:'));

hours = (countMinuts - (countMinuts % 60)) / 60 % 24;
minuts =  countMinuts - ((countMinuts - countMinuts % 60) / 60) * 60;

console.log('Время ' + hours + ' часов, ' + minuts + ' минут.');
