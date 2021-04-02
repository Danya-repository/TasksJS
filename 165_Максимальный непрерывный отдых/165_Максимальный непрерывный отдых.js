// 165_Максимальный непрерывный отдых



var rowNumbers = prompt('Введите числовой ряд').split(' '); 
var firstHalf = rowNumbers.slice().splice(rowNumbers.indexOf("0"));
var secondHalf = rowNumbers.slice().splice(0,rowNumbers.indexOf("0"));
var workArr = firstHalf.concat(secondHalf);
var prev = ''
var chill = 0;
var maxChill = 0; 

for (var i of workArr) {
	if (i == 1) {
		chill++;
		if (chill > maxChill) {
			maxChill = chill;
		}
	}
	else {
		chill = 0;
	}
	
}
console.log(maxChill);