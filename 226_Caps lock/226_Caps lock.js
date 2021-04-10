// 226_Caps lock

function myFunction(x) {
	counter = 0;

	x.split('').forEach(item => (item.charCodeAt() >= 97 && 122 >= item.charCodeAt()) ? counter+=1 : counter+=0);

	if (counter == x.length) {
		return x;
	}
	else {
		x = x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase();
		return x;
	}
}

console.log(myFunction(x=prompt('Введите строку:')));