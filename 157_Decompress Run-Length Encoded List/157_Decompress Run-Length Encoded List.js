// 157_Decompress Run-Length Encoded List

var events = prompt('Введите закодированный список:').split(' ').map(item => parseInt(item));
var arr = [];
var count = 0;

var final = [];

for (var i of events) {
	count++;
	if (count <= 2) {
		arr.push(i);
	}
	if (count == 2) {
		for (var j = 0; j < arr[0]; j++) {
			final.push(arr[1]);
		}
		arr = [];
		count = 0;
	}
}
console.log(final);