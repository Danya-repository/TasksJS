// 28_Автопробег

var count = +(prompt('Введите сколько километров автомобиль проезжает за сутки:'));
var distance = +(prompt('Введите сколько километров нужно проехать:'));


var result = Math.ceil(distance / count);
console.log('Потребуется ' + result);
