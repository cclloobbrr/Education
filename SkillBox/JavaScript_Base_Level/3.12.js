// Тернарный оператор
// Замените конструкция if на тернарный оператор

let randomNumber = 10;
console.log(`Произвольное число: ${randomNumber}`);

// if (randomNumber > 20) {
//   console.log("Число > 20")
// } else {
//   console.log("Число <= 20")
// }

let x = randomNumber > 20 ? `Число > 20` : `Число <= 20`;
console.log(x);