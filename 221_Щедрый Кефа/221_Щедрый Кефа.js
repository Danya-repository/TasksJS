// 221_Щедрый Кефа

var number = prompt('Введите(через пробел) количество шариков и количество друзей:').split(' ').map(item => parseInt(item));
var string = prompt('Введите(без пробелов) строку из цветов шариков:').split('');
var dictionary = new Map();
for (i of string) {
	if (!dictionary.has(i)) {
		dictionary.set(i,1);
	}
	else {
		dictionary.set(i,dictionary.get(i)+1)
	} 
}
var final = Array.from(dictionary.values()).sort((a,b) => a-b);
counterPrev = final.slice(0,final.length-1).reduce((add,item) => add+=item,0);
console.log(final[final.length-1] == counterPrev ? 'YES' : 'NO');