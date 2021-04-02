// 114_Восстановление трёх чисел
// var first = +prompt('Введите первое число:');
// var second = +prompt('Введите второе число:');
// var third = +prompt('Введите третье число:');
// var fourth = +prompt('Введите четвертое число:');

var numbers = prompt('Введите числа').split(' ').map(item => parseInt(item)).sort();

console.log(numbers[numbers.length - 1] - numbers[0],
			numbers[numbers.length - 1] - numbers[1],
			numbers[numbers.length - 1] - numbers[2]);


