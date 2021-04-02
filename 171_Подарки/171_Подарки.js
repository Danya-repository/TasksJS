// 171_Подарки

var count = +prompt('Введите количество гостей:');
var start = prompt('Введите строку').split(' ').map(item => parseInt(item));
var finish = [];

for (var i = 0; i < count; i++) {
	finish.push('');
}

for (var i = 0; i < count; i++) {
	x = start[i] - 1;
	finish[start[i] - 1] = i+1  ;
}
console.log(finish);