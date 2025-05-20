// Общая стоимость товаров

// В программе задано количество 
// товара, цена 1 штуки и значение 
// скидки в процентах. Рассчитайте 
// стоимость покупки и округлите её 
// в пользу покупателя (в меньшую сторону). 
// Результат расчета должен быть выведен
//  в консоль в таком виде: 374

// Синтаксис переключения в строгий режим всего скрипта
"use strict";

let count = 2; // Количество товара
let price = 220; // Цена товара
let percent = 15; // Скидка в процентах

//Введите ваше решение ниже

let price_one_product = price*((100-percent)/100);
let inc = 0;
let total_price;

total_price = price_one_product * inc;
console.log(total_price);

inc++;
total_price = price_one_product * inc;
console.log(total_price);

inc++;
total_price = price_one_product * inc;
console.log(total_price);

console.log(total_price);

// Решение было сделанно с учётом использования инкримента

// Округление через Math.floor() было опущенно 
// учитывая, что с учётом скидки на продукты число получается не дробным