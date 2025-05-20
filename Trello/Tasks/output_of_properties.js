//Вам дам объект

//const person = {
//  firstName: 'Jack',
//  lastName: 'Sparrow',
//  age: 25,
//  location: 'Caribbean sea',
//}
//Необходимо вывести в консоль браузера все свойства и значения объекта person в следующем виде:

//<property>: <value>
//Необходимо вывести в консоль браузера все свойства и значения объекта person таким образом, чтобы вывод выглядел следующим образом:

//First name: Jack
//Last name: Sparrow
//Age: 25 ages
//Where to find: Caribbean sea
//Задание необходимо сделать без создания нового объекта.
//</value>ПОДСКАЗКА: используйте условный оператор

const person = 
{
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
};

for(const key in person)
{
    let displayKey = key;
    let displayValue = person[key];
    
    if(displayKey === `firstName`){
        displayKey = `First name`;
    }else if(displayKey === `lastName`){
        displayKey = `First name`;
    }else if(displayKey === `age`){
        displayKey = `Age`;
    }else if(displayKey === `location`){
        displayKey = `Where to find`;
    }

    console.log(`${displayKey}: ${displayValue}`);
}
