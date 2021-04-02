// 113_Светофор
var firstSection = prompt('Введите цвет первой секции:').toLowerCase();
var secondSection = prompt('Введите цвет второй секции:').toLowerCase();
var thirdSection = prompt('Введите цвет третьей секции:').toLowerCase();


if ((firstSection == 'black') && (secondSection == 'black') && (thirdSection == 'green')) {
	console.log(firstSection);
	console.log(secondSection);
	console.log(thirdSection);
}
else if ((firstSection == 'black') && (secondSection == 'yellow') && (thirdSection == 'black')) {
	console.log(firstSection);
	console.log(secondSection);
	console.log(thirdSection);
}
else if ((firstSection == 'red') && (secondSection == 'black') && (thirdSection == 'black')) {
	console.log(firstSection);
	console.log(secondSection);
	console.log(thirdSection);
}
else if ((firstSection == 'red') && (secondSection == 'yellow') && (thirdSection == 'black')) {
	console.log(firstSection);
	console.log(secondSection);
	console.log(thirdSection);
}
else {
	console.log('error');
}

