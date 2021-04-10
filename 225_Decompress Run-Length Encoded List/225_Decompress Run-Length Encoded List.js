// 225_Decompress Run-Length Encoded List

function myFunction(x) {
	x = x.split(' ').map(item => parseInt(item));
	var finallyArray = Array();
	for (var i = 0; i < x.length; i++) {

		if (i % 2 == 0) {

			for (var j = 0; j < x[i]; j++) {
				finallyArray.push(x[i+1]);
			}

		}
	}
	return finallyArray;
}

console.log(myFunction(x=prompt('Введите закодированные числа:')));