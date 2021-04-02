// 155_Напитки

var count = +prompt('Введите количество напитков');
var events = prompt('Введите строку с цветами подков через пробел:').split(' ').map(item => parseInt(item));
var summ = 0;


for (var i of events) {
	summ+=i;
}
console.log(summ / count);