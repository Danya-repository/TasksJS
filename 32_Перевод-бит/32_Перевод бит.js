// 32_Перевод бит

var countBit = +(prompt('Введите количество бит:'));

var tbait = Math.trunc(countBit / 8796093022208);
countBit -= Math.trunc(countBit / 8796093022208) * 8796093022208;

var gbait = Math.trunc(countBit / 8589934592);
countBit -= Math.trunc(countBit / 8589934592) * 8589934592;

var mbait = Math.trunc(countBit / 8388608);
countBit -= Math.trunc(countBit / 8388608) * 8388608;

var kilobit = Math.trunc(countBit / 1024);
countBit -= Math.trunc(countBit / 1024) * 1024;

var bait = Math.trunc(countBit / 8);
countBit -= Math.trunc(countBit / 8) * 8;

var bit = countBit;

// 0 Тбайт 0 Гбайт 0 Мбайт 1 Кбайт 3 байт 2 бит
console.log( tbait + ' Тбайт, ' + gbait + ' Гбайт, ' + mbait + ' Мбайт, ' + kilobit + ' Килобит, ' + bait + ' байт, ' + bit +' бит.');



