// 1. Дано список імен.
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
//  Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//     let n1 = 'Harry Potter'
//     let n2 = 'Ron Whisley'
//     let n3 = 'Hermione Granger'
//
//
// 2. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
//     sortNums('ascending') // [3,11,21]
//     sortNums('descending') // [21,11,3]
//
//
// 7. є масив
//  let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// 8. Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// 1. Дано список імен.
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
//  Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//     let n1 = 'Harry Potter'
//     let n2 = 'Ron Whisley'
//     let n3 = 'Hermione Granger'
document.write('Завдання 1. Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в нормальний вигляд', '<br/>');
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let validName = (strName) => {
    let validName = ''
    for (const letter of strName) {
        if (letter.toLowerCase() !== letter.toUpperCase()) {
            validName += letter;
        } else {
            let newsletter = ' '
            if (newsletter === ' ' && validName[validName.length - 1] !== ' ') {
                validName += newsletter;
            }
        }
    }
    return validName;
}
console.log(`Завдання 1. ${n1} -> ${validName(n1)}`);
console.log(`Завдання 1. ${n2} -> ${validName(n2)}`);
console.log(`Завдання 1. ${n3} -> ${validName(n3)}`);
document.write(`Завдання 1. ${n1} -> ${validName(n1)}`, '<br/>');
document.write(`Завдання 1. ${n2} -> ${validName(n2)}`, '<br/>');
document.write(`Завдання 1. ${n3} -> ${validName(n3)}`, '<br/>');
document.write('*******************', '<br/>');
console.log('*****************');

// 2. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
document.write('Завдання 2. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.', "<br/>");

let randomFn = (size) =>{
    let randomArr = [];
    for (let i = 0; i < size; i++) {
        randomArr.push(Math.round(Math.random()*100));
    }
    return randomArr;
}
let randomFnResult = randomFn(10);
console.log(`Завдання 2. Масив рандомних чисел: ${randomFnResult}`);
document.write(`Завдання 2. Масив рандомних чисел: ${randomFnResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
document.write('Завдання 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort', "<br/>");

// Масив randomFnResult згенерований попередньою функцією
let sortArr = randomFnResult.sort((a, b) => a-b);

console.log(`Завдання 3. Відсортований масив: ${sortArr}`);
document.write(`Завдання 3. Відсортований масив: ${sortArr}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
document.write('Завдання 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. ' +
    'Відфільтрувати  його за допомоги filter, залишивши тільки парні числа', "<br/>");

// Масив randomFnResult згенерований попередньою функцією
let arrEvenElementOnly= randomFnResult.filter(number => number % 2 === 0);

console.log(`Завдання 4. Відсортований масив з парними числами: ${arrEvenElementOnly}`);
document.write(`Завдання 4. Відсортований масив з парними числами: ${arrEvenElementOnly}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
document.write('Завдання 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .' +
    'за допомоги map та колбеку перетворити всі об\'єкти в масиві на стрінгові.', "<br/>");

// Масив randomFnResult згенерований попередньою функцією
let mapArr = arrEvenElementOnly.map(value => ` ${String(value)} - ${typeof String(value)}` )

console.log(`Завдання 5. за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.: ${mapArr}`);
document.write(`Завдання 5. за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.: ${mapArr}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");


// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
//     sortNums('ascending') // [3,11,21]
//     sortNums('descending') // [21,11,3]

document.write('Завдання 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.', "<br/>");
let sortNums= (direction, nums) =>
     direction === 'ascending' ? nums.sort((a, b) => a - b) :
        direction === 'descending' ? nums.sort((a, b) => b - a) : 'Не визначенний direction';

let nums = [11,21,3];
console.log(`Завдання 6. ascending:  ${sortNums('ascending', nums)}`);
console.log(`Завдання 6. descending: ${sortNums('descending', nums)}`);
document.write(`Завдання 6. ascending: ${sortNums('ascending', nums)}`, "<br/>");
document.write(`Завдання 6. descending: ${sortNums('descending', nums)}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 7. є масив
//  let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
document.write('Завдання 7.  -- відсортувати його за спаданням за monthDuration. ' +
    '-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців', "<br/>");

 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortCourse = coursesAndDurationArray.sort((monthDuration1, monthDuration2) =>
    monthDuration1.monthDuration - monthDuration2.monthDuration)
let filterCourse= sortCourse.filter(number => number.monthDuration > 5);

console.log(`Завдання 7. відсортуваний за спаданням за monthDuration:`, sortCourse);
console.log(`Завдання 7. відфільтрувані, курси з тривалістю більше 5 місяців:`, filterCourse);
console.log('*************');
document.write('*************', "<br/>");

// 8. Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
document.write('Завдання 8. Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.', "<br/>");

function cutString(str, n) {
    let arrResult = [];
    for(let i = 0 ; i < str.length; i += n) {
        arrResult.push(str.substr(i, n));
    }
    return  arrResult;
}
let text = 'наслаждение';
let substrNumber = 3;
console.log(`Завдання 8. ascending:  ${cutString(text, substrNumber)}`);
document.write(`Завдання 8. ascending:  ${cutString(text, substrNumber)}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");
