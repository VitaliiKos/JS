// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
//     Скласти результат цих чисел в змінній result.

let arr = [];
let result = 0;
while (arr.length<10){
    arr.push(Math.floor(Math.random() * 1000));
}
console.log(arr);
for (let i in arr){
    result += arr[i];
}
console.log('Завдання 1. Результат: ', result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name:'It',
    page: 1184,
    genre: 'horror',
}
console.log('Завдання 2. Книга: ', book)

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let books = {
    name:'Stillhouse Lake',
    page: 299,
    genre: 'horror',
    autor: 'Rachel Caine',
}
console.log('Завдання 3. Книга: ', books)

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт
let list_book = [
    {
        name:'It',
        page: 1184,
        genre: 'horror',
    },
    {
        name:'Stillhouse Lake',
        page: 299,
        genre: 'horror',
        autor: 'Rachel Caine',
    },
    {
        name:'Hell House',
        page: 299,
        genre: 'horror',
        autor: 'Rachel Caine',
    }

];
for (const book of list_book) {
    document.write( `<div>
                        <h2>${book.name} </h2>
                        <h3>${book.autor}</h3>
                        <h4>${book.genre}</h4>
                        <h5>${book.page}</h5>
                </div>`);
    console.log('Завдання 4. Книга: ', book)
}


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(`Завдання 5. Площа прямокутника ${s}`);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let V = Math.PI * Math.pow((dC/2), 2) * heightC;
console.log(`Завдання 6.Обєм циліндра ${V}`);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора
// (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m =4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(`Завдання 7.Гіпотенуза: ${k}`)
