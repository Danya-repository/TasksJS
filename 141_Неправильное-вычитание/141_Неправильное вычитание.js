// 1141_Неправильное вычитание

var n = prompt('Число и нужное количество вычитаний').split(' ').map(item => parseInt(item));
var number = n[0];
var count = n[1];


for (var i = 0; i < count; i++) {
	if ((String(number)).substr(-1) == 0) {
		number = number / 10;
	}
	else {
		number--;
	}
}
console.log(number);
