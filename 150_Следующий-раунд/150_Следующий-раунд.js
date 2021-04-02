// 150_Следующий-раунд

var eventCount = prompt('Введите количество участников и номер участника с пограничным баллом:').split(' ').map(item => parseInt(item));
var events = prompt('Введите баллы со всех соревнований через пробел:').split(' ').map(item => parseInt(item));

var count = eventCount[0];
var borderLine = eventCount[1];
var kick = 0;

for (var i of events) {
	if (i >= events[borderLine] && i > 0) {
		continue;
	} 
	else {
		count--;
	}
}
console.log(count);