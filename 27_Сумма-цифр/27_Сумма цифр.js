// 27_Сумма цифр

var number = +(prompt('Введите трехзначное число:'));

count100inNumber = (number - (number % 100)) / 100;
count10inNumber = ((number % 100) - (number % 10)) / 10;
count1inNumber = number % 10


console.log('Сумма чисел числа ' + number + ' составляет ' + (count100inNumber + count10inNumber + count1inNumber));

