// Два бандита

var hitHarry = +(prompt('Введите сколько банок прострелил Гарри(с его слов):'));
var hitLarry = +(prompt('Введите сколько банок прострелил Ларри(с его слов):'));


missedHarry = hitHarry - ((hitHarry + hitLarry) % 2);
missedLarry = hitLarry - ((hitHarry + hitLarry) % 2);

console.log('Гарри не прострелил: ' + missedHarry + ' банок.');
console.log('Ларри не прострелил: ' + missedLarry + ' банок.');
console.log('Банок всего: ' + ((hitHarry + hitLarry) - ((hitHarry + hitLarry) % 2)) + ' шт.');




