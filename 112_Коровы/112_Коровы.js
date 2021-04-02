// 112_Коровы
var resultOfGames = prompt('Введите число:');

if (parseInt(resultOfGames) % 100 > 4 && parseInt(resultOfGames) % 100 <= 20) {
	console.log(resultOfGames + ' korov');
}
else if (parseInt(resultOfGames) % 10 <= 4 && parseInt(resultOfGames) % 10 >= 2) {
	console.log(resultOfGames + ' korovy');
}
else {
	console.log(resultOfGames + ' korova');
}