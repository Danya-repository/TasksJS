// 129_Бал в БерлГУ

var countElementsOfFirstArray = +prompt('Введите количество элементов первого массива');
var firstArray = prompt('Введите числа первого массива через пробел').split(' ').map(item => parseInt(item));

var countElementsOfSecondArray = +prompt('Введите количество элементов второго массива');
var secondArray = prompt('Введите числа второго массива через пробел').split(' ').map(item => parseInt(item));

var count = 0;

if (countElementsOfFirstArray < countElementsOfSecondArray) {
	var i = 0;
	while (i < countElementsOfFirstArray) {

		if (secondArray.includes(firstArray[i])) {
			delete secondArray[secondArray.indexOf(firstArray[i])];
			delete firstArray[i];
			count++;
		}

		else if (secondArray.includes(firstArray[i] - 1)) {
			delete secondArray[secondArray.indexOf(firstArray[i] - 1)];
			delete firstArray[i];
			count++;
		}

		else if (secondArray.includes(firstArray[i] + 1)) {
			delete secondArray[secondArray.indexOf(firstArray[i] + 1)];
			delete firstArray[i];
			count++;
		}
		i++;

	}
}
else if (countElementsOfSecondArray < countElementsOfFirstArray) {
	var i = 0;
	while (i < countElementsOfSecondArray) {

		if (firstArray.includes(secondArray[i])) {
			delete firstArray[firstArray.indexOf(secondArray[i])];
			delete secondArray[i];
			count++;
		}

		else if (firstArray.includes(secondArray[i] - 1)) {
			delete firstArray[firstArray.indexOf(secondArray[i] - 1)];
			delete secondArray[i];
			count++;
		}

		else if (firstArray.includes(secondArray[i] + 1)) {
			delete firstArray[firstArray.indexOf(secondArray[i] + 1)];
			delete secondArray[i];
			count++;
		}
		i++;

 }
}
else {
	var i = 0;
	while (i < countElementsOfFirstArray) {

		if (secondArray.includes(firstArray[i])) {
			delete secondArray[secondArray.indexOf(firstArray[i])];
			delete firstArray[i];
			count++;
		}

		else if (secondArray.includes(firstArray[i] - 1)) {
			delete secondArray[secondArray.indexOf(firstArray[i] - 1)];
			delete firstArray[i];
			count++;
		}

		else if (secondArray.includes(firstArray[i] + 1)) {
			delete secondArray[secondArray.indexOf(firstArray[i] + 1)];
			delete firstArray[i];
			count++;
		}
		i++;
	}
}

console.log(count);