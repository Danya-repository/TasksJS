// 34_А Хипстер Вася

var redSocks = +(prompt('Введите количество красных носков:'));
var blueSocks = +(prompt('Введите количество синих носков:'));


countFashionDays = Math.min(redSocks,blueSocks);
countNoFashionDays = Math.trunc((Math.max(redSocks,blueSocks) - Math.min(redSocks,blueSocks)) / 2);

console.log('У Васи будет модных дней: ' + countFashionDays + '. А не модных дней: ' + countNoFashionDays + '.');

