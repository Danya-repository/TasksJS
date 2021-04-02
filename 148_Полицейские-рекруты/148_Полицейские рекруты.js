// 148_Полицейские рекруты

var eventCount = prompt('Введите количество событий:');
var events = prompt('Введите количество событий:').split(' ').map(item => parseInt(item));
var count = 0;
var freeCops = 0;
for (var i of events) {
	if (i > 0) {
		freeCops+= i;
		continue;
	}
	else {
		freeCops+=i;
		if (freeCops < 0) {
			count+=freeCops;
			freeCops = 0;
		}
		else {
			continue;
		}
	}
} 
console.log(count*-1);
	