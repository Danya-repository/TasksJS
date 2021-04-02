// 152_Тренировки-Егора151_Праздник равенства

var eventCount = +prompt('Введите количество тренировок:');
var events = prompt('Введите количество повторений всех упражнений через пробел:').split(' ').map(item => parseInt(item));

var count = 0;
var max = events[events.length - 1];

var back = 0;
var chest = 0;
var biceps = 0;



for (var i of events) {
	count++
	if (count == 1) {
		chest+=i;
	}
	else if (count == 2) {
		biceps+=i;
	}
	else if (count == 3) {
		back+=i;
		count = 0;
	}
}
if (back > biceps && back > chest) {
	console.log('Back');
}
else if (biceps > back && biceps > chest) {
	console.log('Biceps');
}
else if (chest > back && chest > biceps) {
	console.log('Chest');
}