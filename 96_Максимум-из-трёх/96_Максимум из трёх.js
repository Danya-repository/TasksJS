// 96_Максимум из трёх
var n = prompt('Введите число N: ');
var m = prompt('Введите число M: ');
var v = prompt('Введите число V: ');

if (n > m) {
	if (n > v) {
		console.log(n);
	}
	else if (n < v) {
		console.log(v);
	}
	else {
		console.log(n,v);
	}
}
else if (n < m) {
	if (m > v) {
		console.log(m);
	}
	else if (m < v) {
		console.log(v);
	}
	else {
		console.log(m,v);
	}
}
else {
	console.log(n,m);
}