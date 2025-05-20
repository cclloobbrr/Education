//Дан массив элементов
//[cat, dog, parrot, horse]
//Как узнать индекс элемента parrot?


const animals = ['cat', 'dog', 'parrot', 'horse'];

//вернёт первый попавшийся
const index1 = animals.findIndex(animal => animal === "parrot");
console.log("Индекс найденый первым способом: ", index1,"\n");
//вернёт первый попавшийся
const index2 = animals.indexOf('parrot');
console.log("Индекс найденый вторым способом: ", index2, '\n');
//вернёт все индексы
for(let i = 0; i < animals.length; i++){
    if(animals[i] === 'parrot'){
        console.log("Индекс найденый 3 способом: ", i);
    }
}