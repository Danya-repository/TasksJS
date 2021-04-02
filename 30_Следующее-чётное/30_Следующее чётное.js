// 30_Следующее чётное

var number = +(prompt('Введите число: '));

result = (number - (number % 2)) + 2

console.log('Следующе чётное число после числа ' + number + ' это число ' + result + '.');