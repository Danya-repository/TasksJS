// 71_А дабстеп

// var string = prompt('Введите фразу: ').replaceAll('WUB',' ').split(' ');
var string = prompt('Введите фразу: ');
var string = string.replaceAll('WUB',' ').split(' ')
// var string = String(string)replaceAll('');
console.log(string);


for (var i = 0; i < string.length; i += 1) {
	if (string[i] == "") {
		string.splice(i,1);
	}
}

console.log(string.join().replaceAll(',', ' '));