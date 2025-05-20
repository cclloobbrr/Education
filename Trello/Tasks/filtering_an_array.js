//Дан массив:
//[31, 10, 'chicken', 9, 'fish', 10]
//Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?
//Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10?

const arr = [31, 10, 'chicken', 9, 'fish', 10];

const strings = arr.filter(item => typeof item === 'string');
console.log(strings);

const tens = arr.filter(item => item === 10);
console.log(tens);

