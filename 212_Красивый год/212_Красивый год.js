// 212_Красивый год

var startYear = +prompt('Введите стартовый год:');


while (true) {
	startYear++;
	if (String(startYear).split('').filter((item,index,array) => array.indexOf(item) === index).length == 4) {
		console.log(startYear);
		break;
	}
}