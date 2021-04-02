// 130_Subtract the Product and Sum of Digits of an Integer
var sum = 0;
var umn = 1;
var number = prompt('Введите число:').split('').forEach((item) => (sum+=parseInt(item),umn*=parseInt(item)));
console.log(umn-sum);