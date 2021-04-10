//224_Красивый год

function myFunction(x) {
	var y = x;
	while (String(y).split('').filter((item,index,array) => array.indexOf(item) == index).length != 4 || y==x) {
		y = parseInt(y) + 1;
	}
	return y;	
}

console.log(myFunction(x=prompt('Введите год:')));