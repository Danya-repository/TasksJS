// 65_Упражнение на строки

var addres = prompt('Введите фразу: ');

addres = addres.toUpperCase();
addres = addres.replaceAll('A','');
addres = addres.replaceAll('O','');
addres = addres.replaceAll('Y','');
addres = addres.replaceAll('E','');
addres = addres.replaceAll('U','');
addres = addres.replaceAll('I','');
addres = addres.replaceAll('','.');
addres = addres.substring(0, addres.length - 1).toLowerCase();

console.log(addres);

