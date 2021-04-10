// 227_Эпическая игра




function myFunction(param) {
	a = param.split(' ')[0];
	b = param.split(' ')[1];
	n = param.split(' ')[2];

	counter = 0;

	function gcd(a,b) {
	min = Math.min(a,b);
	max = Math.max(a,b);
	while (min > 0) {
		var result = min;
		min = max % min;
		max = result;
	}

	return result;

	}


	while (n > 0) {
		if (counter % 2 == 0) {
			n-=gcd(a,n);
			counter++
		}

		else {
			n-=gcd(b,n);
			counter++
		}
	}

	return (counter % 2 ? 0 : 1);
	
}

console.log(myFunction(param=prompt('Ввод:')));
