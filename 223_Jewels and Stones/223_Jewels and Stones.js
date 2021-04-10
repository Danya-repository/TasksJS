// 223_Jewels and Stones

function myFunction(x, y) {
	var counter = 0;
	for (i of x.split('')) {
		for (j of y.split('')) {
			if (i == j) {
				counter++;
			}
		}
	}
	return counter;
	
	
}

var jewels = prompt('Введите драгоценные камни');
var stones = prompt('Введите все камни');

console.log(myFunction(x=jewels,y=stones));