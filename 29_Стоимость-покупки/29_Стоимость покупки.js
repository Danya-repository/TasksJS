// 29_Стоимость покупки

var rubles = +(prompt('Какое количество рублей стоит пирожок:'));
var kopes = +(prompt('Какое количество копеек стоит пирожок:'));
var count = +(prompt('Сколько нужно пирожков:'));


var countCopInRuble = rubles * 100;
var countKopesInAllSumm = (countCopInRuble + kopes) * count;

console.log('Общая стоимость покупки: ' + (Math.trunc(countKopesInAllSumm / 100)) + ' рублей, ' + (countKopesInAllSumm % 100) + ' копеек.');
