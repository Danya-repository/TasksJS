// 154_Не-смешите-мои-подковы

var events = prompt('Введите строку с цветами подков через пробел:').split(' ').map(item => parseInt(item));
var result = [];


for (var i of events) {
	if (result.includes(i)) {
		continue;
	}
	result.push(i);
}
console.log(events.length - result.length);