// 201_Заполнение змейкой


var n = +prompt('Введите n');
var m = +prompt('Введите m');

var value = 0;
var finalArr = Array();

for (var i = 0; i < n; i++) {
	var arr = Array();
	for (var j = 0; j < m; j++) {
		arr.push(value);
		value++;
	} 
	finalArr.push((i % 2 == 0 ? arr : arr.reverse()));
}

for (var i of finalArr) {
	console.log(i.join(' '));
}