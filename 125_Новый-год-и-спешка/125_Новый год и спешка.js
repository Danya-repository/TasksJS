// 125_Новый год и спешка

var num1 = +prompt('Введите количество задач:'); 7
var num2 = +prompt('Сколько минут требуется чтобы добраться на вечеринку:');1
var limitTime = 240 - num2;
var countTasks = 0;

while (limitTime-countTasks*5 > 0 && countTasks != num1) {
	countTasks++;
	limitTime-=countTasks*5;
}
console.log(countTasks)


