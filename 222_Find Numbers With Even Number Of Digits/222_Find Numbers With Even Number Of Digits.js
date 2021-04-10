// 222_Find Numbers With Even Number Of Digits


function myFunction(list) {
	if (typeof list === 'object') {

		var counter = 0;

		for (i of list) {
			if (String(i).length % 2 == 0) {
				counter++;
			}
		}
	}
	
	else {console.log('Переданный параметр не является объектом')}

	return counter;
}

console.log(myFunction([555, 901, 482, 1771]));