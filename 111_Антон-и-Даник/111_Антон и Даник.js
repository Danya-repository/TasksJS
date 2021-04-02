// 111_Антон и Даник
var resultOfGames = prompt('Введите результаты игр:');

var anton = resultOfGames.split('').reduce((count,item) => {if (item == "A") {return count + 1} else {return count + 0}}, 0);
var danik = resultOfGames.split('').reduce((count,item) => {if (item == "D") {return count + 1} else {return count + 0}},0); 

if (danik > anton) {
	console.log('Danik');
}
else if (anton > danik) {
	console.log('Anton');
}
else {
	console.log('Friendship');
}