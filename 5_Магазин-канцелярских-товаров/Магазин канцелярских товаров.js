// Магазин канцелярских товаров

var pencilCount = +(prompt('Введите количество карандашей: '));
var penCount = +(prompt('Введите количество ручек: '));
var FeltPenCount = +(prompt('Введите количество фломастеров: '));

var pricePencil = 3;
var pricePen = pricePencil + 2;
var priceFeltPen =  pricePen + 7;

var allPrice  = (pencilCount * pricePencil) + (penCount * pricePen) + (FeltPenCount * priceFeltPen);
console.log('Общая стоимость покупки ' + allPrice + ' рублей.')