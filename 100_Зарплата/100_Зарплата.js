// 100_Зарплата
var n = parseInt(prompt('Введите число N: '));
var m = parseInt(prompt('Введите число M: '));
var v = parseInt(prompt('Введите число V: '));
var max;
var min;
if (n > m) {
	if (n > v) {
		max = n;
	}
	else if (n < v) {
		max = v;;
	}
	else {
		max = v;
	}
}
else if (n < m) {
	if (m > v) {
		max = m;
	}
	else if (m < v) {
		max = v;
	}
	else {
		max = v;
	}
}
else {
	if (v > m) {
		max = v;
	}
	else {
		max = m;
	}
}

if (n < m) {
	if (n < v) {
		min = n;
	}
	else if (n > v) {
		min = v;
	}
	else {
		min = v;
	}
}
else if (n > m) {
	if (m > v) {
		min = v;
	}
	else if (m < v) {
		min = m;
	}
	else {
		min = m;
	}
}
else {
	if (v < m) {
		min = v;
	}

	else {
		min = m;
	}
	
}
if (n==m && m==v) {
	min = n;
	max = v;
}

console.log(max - min);