// 104_Количество равных из трёх
var x = parseInt(prompt('Введите число 1: '));
var y = parseInt(prompt('Введите число 2: '));
var z = parseInt(prompt('Введите число 3: '));
var result = String();

if ((x == y && y == z) || (z == x && x == y) || (y == z && z == x)) {
	var result = 3;
}
else if ((x == y && y != z) || (y == z && z != x) || (z == x && x != y)) {
	var result = 2;
}
else {
	var result = 0;
}



console.log(result);

