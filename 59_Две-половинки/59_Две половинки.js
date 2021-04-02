// 559_Две половинки

var string = prompt('Введите фразу');

var count = Math.trunc(string.length / 2);
var ostatok = string.length % 2;


// console.log(string.substr(start = -count) + string.slice(count+ostatok));
// console.log((string.substring(count+ostatok)) + (string.slice(0, count+ostatok)));
console.log(string.slice(count+ostatok) + string.slice(0,count+ostatok));
