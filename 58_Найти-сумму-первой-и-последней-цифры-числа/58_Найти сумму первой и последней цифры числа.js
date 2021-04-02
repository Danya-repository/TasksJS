// 58_Найти сумму первой и последней цифры числа

var numberString = prompt('Введите число');

console.log('Сумма первой и последней цифры: ' + (parseInt(numberString[0]) + parseInt(numberString.substr(end=-1)) + '.'));