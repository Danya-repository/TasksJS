// 22_Делёж яблок 1

var countChild = +(prompt('Введите количество детей:')); 
var countApple = +(prompt('Введите количество яблок:')); 


console.log('Каждый ребёнок получит по ' + ((countApple - (countApple % countChild)) / countChild) + ' шт.')