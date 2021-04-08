// 214_Антон и буквы

var levelArr = prompt('Вветие буквы:');
levelArr = levelArr.slice(1,levelArr.length-1).split(', ').filter((item,index,array) => array.indexOf(item) === index);
if (levelArr[0] == '') {
	levelArr = [];
}
console.log(levelArr.length);
