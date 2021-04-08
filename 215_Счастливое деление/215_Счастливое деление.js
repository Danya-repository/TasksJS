// 215_Счастливое деление

var digit = prompt('Введите число:');
if (+digit % 4 == 0 || +digit % 7 == 0 ||
	(String(digit).split('').filter((item,index,array) => array.indexOf(item) == index).map(item => parseInt(item)).includes(4) 
	&& String(digit).split('').filter((item,index,array) => array.indexOf(item) == index).map(item => parseInt(item)).includes(7) && String(digit).split('').filter((item,index,array) => array.indexOf(item) == index).length == 2)) 
{
	console.log('YES');
}
else {
	console.log('NO');
}
