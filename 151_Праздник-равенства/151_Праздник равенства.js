// 151_Праздник равенства

var eventCount = +prompt('Введите количество участников и номер участника с пограничным баллом:');
var events = prompt('Введите баллы со всех соревнований через пробел:').split(' ').map(item => parseInt(item)).sort();

var count = 0;
var max = events[events.length - 1];

for (var i of events) {
	count += (max - i);
}
console.log(count);