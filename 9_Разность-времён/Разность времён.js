// Разность времён

var firstMomentHours = +(prompt('Введите часы в первый момент времени:'));
var firstMomentMinuts = +(prompt('Введите минуты в первый момент времени:'));
var firstMomentSeconds = +(prompt('Введите секунды в первый момент времени:'));

var secondMomentHours = +(prompt('Введите часы во второй момент времени:'));
var secondMomentMinuts = +(prompt('Введите минуты во второй момент времени:'));
var secondMomentSeconds = +(prompt('Введите секунды во второй момент времени:'));

countSecondInFirstMoment = (((firstMomentHours * 60) + firstMomentMinuts) * 60) + firstMomentSeconds;
countSecondInSecondMoment = (((secondMomentHours * 60) + secondMomentMinuts) * 60) + secondMomentSeconds;

result = countSecondInSecondMoment - countSecondInFirstMoment
console.log('Прошло ' + result + ' секунд.');

