// 170_Кодовый замок

var count = +prompt('Введите количество дисков:');
var start = prompt('Введите строку').split('').map(item => parseInt(item));
var finish = prompt('Введите строку').split('').map(item => parseInt(item));

result = 0;

for (var i = 0; i < count; i++) {
	var first = 0;
	var second = 0;
	x = 10 + start[i] ;
	while (Math.abs(x%10) != finish[i]) {
		x--;
		first++;
	}
	x = 10 + start[i] ;
	while (Math.abs(x%10) != finish[i]) {
		x++;
		second++;
	}
	result+=Math.min(first,second);
}
console.log(result);
