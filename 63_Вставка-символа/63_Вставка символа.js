// 63_Вставка символа

var addres = prompt('Введите фразу: ');
addres = addres.replaceAll('','*')
console.log(addres.slice(1,addres.length-1));