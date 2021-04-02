// 1109_Этап жизни
var age = parseInt(prompt('Введите возраст: '));
var result = String();

if (0 < age && age < 2) {
	result='Младенец';
}
else if (2 <= age && age < 4) {
	result='Малыш';
}
else if (4 <= age && age < 12) {
	result='Ребёнок';
}
else if (12 <= age && age < 19) {
	result='Подросток';
}
else if (19 <= age && age < 65) {
	result='Взрослый';
}
else {
	result='Пожилой'
}









console.log(result);

