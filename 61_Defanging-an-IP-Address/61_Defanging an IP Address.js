// 61_Defanging an IP Address

var addres = prompt('Введите адрес:');

console.log(addres.replaceAll('.','[.]'));