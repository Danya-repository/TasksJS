// 110_Илья и банковский счёт
var count = prompt('Введите состояние счёта: ');
var result = String();

var first = parseInt(count.substring(0,count.length-1));
var second = parseInt(count.substring(0,count.length-2)+count[count.length-1]);
var third = parseInt(count);


if (first > second && first > third) {
	var result = first;
}
else if (second > first && second > third) {
	var result = second;
}
else if (third > first && third > second) {
	var result = third;
}

if (result == -0) {
	var result = 0;
}





console.log(result);

