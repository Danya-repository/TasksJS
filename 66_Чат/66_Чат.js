// 66_Чат ahhellllloou


var addres = prompt('Введите фразу: ');

addres = addres.split('');

var newContainer = '';
for (var i = 0; i < addres.length; i += 1) {
	if (newContainer.indexOf(addres[i]) == -1) {
		newContainer += addres[i];
	}
}
if (newContainer.indexOf('helo') != -1) {
	console.log('YES!');
}
else {
	console.log('NO!');
}