//Дана строка:
//Я изучаю JavaScript
//Как вывести 3-й символ? 1-й? Последний?

let str = "Я изучаю JavaScript";

console.log("3й символ: ", str[2]);
console.log("1й символ: ", str[0]);
console.log("Последний символ: ", str[str.length-1]);

console.log("------------------------------------------");

console.log("3й символ: ", str.charAt(2));
console.log("1й символ: ", str.charAt(0));
console.log("Последний символ: ", str.slice(-1));
