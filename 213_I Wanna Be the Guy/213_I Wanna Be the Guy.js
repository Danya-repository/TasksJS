// 213_I Wanna Be the Guy

var levelArr = Array.from(Array(+prompt('Введите количество уровней:')+1).keys()).slice(1);
var x = prompt('Введите уровни которые может пройти X:').split(' ').map(item => parseInt(item));
var y = prompt('Введите уровни которые может пройти Y:').split(' ').map(item => parseInt(item));
var xyArr = x.concat(y).filter((item,index,array) => array.indexOf(item) === index);
levelArr = levelArr.filter((item,index,array) => !xyArr.includes(item));
console.log(levelArr.length == 0 ? 'I become the guy.' : 'Oh, my keyboard!');

