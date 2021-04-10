// 228_Уроки дизайна

function compositeOrNo(x) {
	for (var i = 2; i < x-1; i++) {
		if (i!=x && x%i==0) {
			return 1;
		}
	}
	return 0;
}

function myFunction(y) {
	var start = 1;
	while (y-start!=0) {
		if (compositeOrNo(start) && compositeOrNo(y-start)) {
			return [start, y-start];
		}
		start++;
	}
	return 0;
}

var number = prompt('Введите число');
console.log(myFunction(number));