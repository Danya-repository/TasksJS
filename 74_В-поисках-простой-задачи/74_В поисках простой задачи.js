// 74_В поисках простой задачи
var count = prompt('Введите изначальное количество элементов:');
var string = prompt('Введите строку:');

// console.log(string.split(' ').sort().reverse());

if ((string.split(' ').sort().reverse())[0] > 0) {
	console.log('HARD');
}
else {
	console.log('EASY');
}

