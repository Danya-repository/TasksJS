// 36_Мкад

var countKm = +(prompt('Введите количество километров'));
var countHours = +(prompt('Введите количество часов'));
distance = countKm * countHours


console.log('Вася остановится на отметке: ' + (Math.max(distance, 109) - Math.abs(Math.min(distance, 109))));