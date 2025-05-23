
function parseEmployeesData(dataString){
    return dataString
    //разбиваем текст по строкам(по переносам строки)
    .split('\n')
    // убираем пустые строки и строки с пробелами
    .filter(line => line.trim().length > 0)
    //преобразуем каждую строку
    .map(line => {
        //через запятую выписаны ФИО и должность человека
            const [fullName, occupation] = line
                // разбиваессм строку по запятой
                .split(',')
                //убираем лишние пробелы (после или перед запятой)
                .map(str => str.trim())
                //убираем из всего массива пустые строки, которые могут появиться
                //если в тексте есть несколько пробелов подряд в результате ручного ввода
                .filter(text => text.length > 0);
            const [surname, name, middleName] = fullName
                //ФИО в тексте написаны через пробел, так что разбиваем по пробелу
                .split(' ')
                // и тоже убираем лишнее
                .filter(text => text.length > 0);
                //возвращаем объект со структурированными данными
                return{
                surname, name, middleName, occupation
            };
        })
}


let data = parseEmployeesData(`
    Тиунов Тимофей Сергеевич,  системный архитектор
    Иванов Иван Иванович , frontend-разработчик
    `);

data.forEach(employee => {
    console.log('---');
    for (const key in employee) {
        console.log(`${key}: ${employee[key]}`);
    }
});