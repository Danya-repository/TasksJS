// 23_Делёж яблок 2

var countChild = +(prompt('Введите количество детей:')); 
var countApple = +(prompt('Введите количество яблок:')); 


console.log('В корзинке останется ' + (countApple % countChild) + ' шт.')