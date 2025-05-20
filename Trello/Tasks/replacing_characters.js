//Можем ли мы заменить в строке:
//Я изучаю JavaScipt
//символ ю на другой? Если да, то как?
//Можем ли заменить слово JavaScript на 'Frontend`?

let str = "Я изучаю JavaScript";

console.log("------------------------------------------");

let newStr = str.replace('ю', 'л'); // замена только 1го символа
console.log(newStr);

newStr = str.replace(/ю/g, 'у'); // замена всех сиволов
console.log(newStr);

newStr = str.replaceAll('ю', '0'); // замена всех сиволов
console.log(newStr);

console.log("------------------------------------------");

newStr = str.replace('JavaScript', 'Frontend');
console.log(newStr);

newStr = str.replaceAll('JavaScript', 'Frontend');
console.log(newStr);

console.log("------------------------------------------");

newStr = str.replace('ю', 'л').replace('JavaScript', 'Frontend');
console.log(newStr);
