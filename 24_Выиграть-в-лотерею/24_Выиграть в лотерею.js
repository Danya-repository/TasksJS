// 24_Выиграть в лотерею

var summ = +(prompt('Введите сумму которую хотите снять:'));

var coin100 = 100;
var coin20 = 20;
var coin10 = 10;
var coin5 = 5;
var coin1 = 1;

var operationWithCoin100 = (summ - (summ % coin100)) / coin100
summ = summ	% coin100;

var operationWithCoin20 = (summ - (summ % coin20)) / coin20
summ = summ	% coin20;

var operationWithCoin10 = (summ - (summ % coin10)) / coin10
summ = summ	% coin10;

var operationWithCoin5 = (summ - (summ % coin5)) / coin5
summ = summ	% coin5;

var operationWithCoin1 = (summ - (summ % coin1)) / coin1

console.log('Минимальное количество купюр: ' + (operationWithCoin100 + operationWithCoin20 + operationWithCoin10 + operationWithCoin5 + operationWithCoin1) + ' шт.')