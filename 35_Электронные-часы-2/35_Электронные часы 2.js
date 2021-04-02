// 35_Электронные часы 2

var countSeconds = +(prompt('Введите количество секунду прошедших с начало суток'));

var hours = +(Math.trunc(countSeconds / 3600));
var minuts = +(Math.trunc(Math.trunc(countSeconds - (hours * 3600)) / 60));
var seconds = +(Math.trunc(Math.trunc(countSeconds - (hours * 3600)) % 60));

desyatkiMinut = Math.trunc(minuts / 10); 
edinicyMinut = Math.trunc(minuts % 10); 

desyatkiSecund = Math.trunc(seconds / 10); 
edinicySecund = Math.trunc(seconds % 10); 



console.log((hours % 24) + ':' + (desyatkiMinut + '') + (edinicyMinut + '') + ':' + (desyatkiSecund + '') + (edinicySecund + ''));