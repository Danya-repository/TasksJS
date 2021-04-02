// 149_I_love_%username%

var eventCount = prompt('Введите количество соревнований:');
var events = prompt('Введите баллы со всех соревнований через пробел:').split(' ').map(item => parseInt(item));
var count = 0;

var max = events[0];
var min = events[0];

for (var i = 1; i < eventCount; i++) {
	if (events[i] > max) {
		max = events[i];
		count++;
	}
	else if (events[i] < min) {
		min = events[i];
		count++
	}
}
console.log(count);