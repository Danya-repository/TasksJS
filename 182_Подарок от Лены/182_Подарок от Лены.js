// 182_Подарок от Лены

var n = +prompt('Введите n');
var string = ''
for (var i = 0; i <= n*2; i++) {
	if (i <= n) {
		var arr = '  '.repeat(n-i);
	
			for (var j = 0; j <= i; j++) {
				arr = arr + j + ' '
			}
			arr = arr + arr.split('').reverse().slice(3).join('')
		console.log(arr);
		var x = n;
		continue;
		}
	if (i >= n + 1) {
		var arr = '  '.repeat(i - n)
		// console.log(i,n, i - n)
			// console.log(arr+'1')
			for (var k = 0; k < x; k++) {
				arr = arr + k + ' '
			}
			arr = arr + arr.split('').reverse().slice(3).join('')
			x--
		console.log(arr);
	}
}
