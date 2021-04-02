// 72_Карточки

var count = prompt('Введите количество карточек:');
var string = prompt('Введите карточки:');
var z = [];
var n = [];


for (var i = 0; i < string.length; i += 1) {
	if (string[i] == "z") {
		z.push(string[i]);
	}
	else if (string[i] == "n") {
		n.push(string[i]);
	}
}
n = n.concat(z);
console.log(n.join().replaceAll('n', 1).replaceAll('z', 0).replaceAll(',',' '));