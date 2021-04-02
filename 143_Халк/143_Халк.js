// 143_Халк

var n = +prompt('Введите n');
var fullFeel = '';


for (var i = 1; i <= n; i++) {
	if (fullFeel.length > 0) {
		fullFeel = fullFeel + ' that ';
	}
	if (i % 2 != 0) {
		fullFeel = fullFeel + 'I hate';
	}
	else {
		fullFeel = fullFeel + 'I love';
	}
	if (i == n) {
		fullFeel = fullFeel + ' it'
	}
	
}
console.log(fullFeel);
