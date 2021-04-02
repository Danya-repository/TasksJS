// 93_Билеты на метро
var n = prompt('Введите поездок: ');

var x = String(); // 1
var y = String(); // 10
var z = String(); // 60

var first = n * 15;
var second = Math.ceil(n / 10) * 125;
var third = Math.ceil(n / 60) * 440;
var fouth = (Math.trunc(n / 10) * 125) + (n - Math.trunc(n / 10) * 10) * 15; // 10 - 1
var fifth = (Math.trunc(n / 60) * 440) + (Math.ceil((n - Math.trunc(n / 60) * 60) / 10) * 125); // 100 - 10
var sixth = (Math.trunc(n / 60) * 440) + (n - Math.trunc(n / 60) * 60) * 15; // 100 - 1
var seventh = (Math.trunc(n / 60) * 440) + (Math.trunc((n - Math.trunc(n / 60) * 60) / 10) * 125) + (((n - Math.trunc(n / 60) * 60) % 10) * 15);


var minimal = Math.min(first,second,third,fouth,fifth,sixth,seventh);

if (minimal == first) {
	var x = n;
	var y = 0;
	var z = 0;
}
else if (minimal == second) {
	var x = 0;
	var y = Math.ceil(n / 10);
	var z = 0;
}
else if (minimal == third) {
	var x = 0;
	var y = 0;
	var z = Math.ceil(n / 60);
}
else if (minimal == fouth) {
	var x = n - Math.trunc(n / 10) * 10;
	var y = Math.trunc(n / 10)
	var z = 0;
}
else if (minimal == fifth) {
	var x = 0;
	var y = Math.ceil((n - Math.trunc(n / 60) * 60) / 10);
	var z = Math.trunc(n / 60);
}
else if (minimal == sixth) {
	var x = n - Math.trunc(n / 60) * 60;
	var y = 0;
	var z = Math.trunc(n / 60);
}
else if (minimal == seventh) {
	var x = ((n - Math.trunc(n / 60) * 60) % 10);
	var y = Math.trunc((n - Math.trunc(n / 60) * 60) / 10)
	var z = Math.trunc(n / 60);
}
console.log(x,y,z);



// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fouth);
// console.log(fifth);
// console.log(sixth);
// console.log(seventh);

// 880 + 375

// console.log(Math.trunc(n / 60) * 440);
// console.log(Math.trunc((n - Math.trunc(n / 60) * 60) / 10) * 125);
// console.log((n - Math.trunc(n / 60) * 60) % 10 * 15);