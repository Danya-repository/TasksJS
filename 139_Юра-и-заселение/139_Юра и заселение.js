// 139_Юра и заселение

var n = +prompt('Введите количество комнат:');
var count = 0;
var max = 0;

for (var i = 0; i < n; i++) {
	var result = prompt('Введите число проживающих в комнате и максимальное число человек которые могут жить в комнате:').split(' ').map(item => parseInt(item));
	if (result[1] - result[0] >= 2) {
		count++;
	}
}
console.log(count);