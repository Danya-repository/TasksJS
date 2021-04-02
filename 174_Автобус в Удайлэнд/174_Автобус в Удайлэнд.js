// 174_Автобус в Удайлэнд
var count = +prompt('Введите количество рядом:');
var counter = 0;
var result = [];

for (var i = 0; i < count; i++) {
	var input = prompt().split('|');
	if (input.includes("OO") && counter == 0) {
		input[input.indexOf("OO")] = "++";
		counter++;
		result.push(input.join('|'));
	}
	else {
		result.push(input.join('|'));
	}
	continue;
}

if (counter != 0) {
	console.log('YES');
	for (var i of result) {
		console.log(i)
	} 
}
else {
	console.log('NO');
}
