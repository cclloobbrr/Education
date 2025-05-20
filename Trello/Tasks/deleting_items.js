//Дан массив элементов
//[cat, dog, parrot, horse, fish, chicken, lion]
//Как удалить элемент fish?
//Как удалить элемент cat?
//Как удалить последние 2 элемента?

const animals = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
console.log(animals);


const index = animals.indexOf('fish');
animals.splice(index, 1);
console.log(animals);

animals.splice(0, 1);
console.log(animals);

animals.splice(-2);
console.log(animals);
