// 128_Ваня и кубики
// function searcher(x) {
	// var start = x;
	// var summ = start;
	// while (start - 1 > 0) {
	// 	summ+=start-1;
	// 	start--;
// 	}
// 	return summ;
// }

// var cubes = +prompt('Введите исходное количество кубиков');
// var start = 1;
// var counter = 0;


// while (true) {
// 	if (cubes - searcher(start) < 0) {
// 		break
// 	}
// 	cubes-=searcher(start);
// 	start++;
// 	counter++;
// }
// console.log(counter);


var cubes = +prompt('Введите число кубиков:');
start = 1;
counter = 0;
x = 1;
while (true) {
	start = x;
	summ = start;
	while (start - 1 > 0) {
		summ+=start-1;
		start--;
	}
	cubes-=summ;
	if (cubes<0) {
		break;
	} 
	x+=1;
	counter++;
}
console.log(counter);
// var start = +prompt('Введите начало:');
// var summ = start;
// while (start - 1 > 0) {
// 	summ+=start-1;
// 	start--;
// }
// console.log(summ);

// console.log(counter);