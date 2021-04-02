// 132_Выращиваем бактерии

var needCount = +prompt('Введите желаемое число:');
var startCount = 1;
var prevCount = 0;
result = 0;


while (needCount > 0 ) {
	var prevCount = 0;
	var startCount = 1;
	while (startCount <= needCount) {
			prevCount = startCount;
		if (startCount > needCount) {
			break
		}
		startCount*=2;
	}
	needCount-=prevCount;
	result++;

}
console.log(result)
