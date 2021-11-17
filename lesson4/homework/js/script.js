// 1. створити функцію яка обчислює та повертає площу прямокутника висотою
// 2. створити функцію яка обчислює та повертає площу кола
// 3. створити функцію яка обчислює та повертає площу циліндру
// 4. створити функцію яка приймає масив та виводить кожен його елемент
// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// 1. створити функцію яка обчислює та повертає площу прямокутника висотою
document.write('Завдання 1. створити функцію яка обчислює та повертає площу прямокутника.', '<br/>');
function calculatesArea(a, b) {
    return a * b;
}
let result = calculatesArea(50, 20);
document.write(`Площа прямокутника: ${result}`,'<br/>');
console.log(`Площа прямокутника: ${result}`);

document.write(`***********************`,'<br/>');
console.log(`*******************`);

// 2. створити функцію яка обчислює та повертає площу кола
document.write('Завдання 2. Cтворити функцію яка обчислює та повертає площу кола.', '<br/>');
function circleArea(r) {
    let PI= 3.14;
    return( 2 * PI * r);
}
let resultCircle = circleArea(30);
document.write(`Площа кола: ${resultCircle}`,'<br/>');
console.log(`Площа кола: ${resultCircle}`);
document.write(`***********************`,'<br/>');
console.log(`*******************`);

// 3. створити функцію яка обчислює та повертає площу циліндру
document.write('Завдання 3. створити функцію яка обчислює та повертає площу циліндру.', '<br/>');
function cylinderArea(r, h) {
    let PI= 3.14;
    return( 2 * PI * r * h);
}
let resultCylinder = cylinderArea(30, 10);
document.write(`Площа циліндрa: ${resultCylinder}`,'<br/>');
console.log(`Площа циліндрa: ${resultCylinder}`);

document.write(`***********************`,'<br/>');
console.log(`*******************`);

// 4. створити функцію яка приймає масив та виводить кожен його елемент
document.write('Завдання 4. створити функцію яка приймає масив та виводить кожен його елемент.', '<br/>');
function arr(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        document.write(a[i],'<br/>');
    }
}
let array = [54,87,'true', null, false];
arr(array);
document.write(`***********************`,'<br/>');
console.log(`*******************`);

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('Завдання 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент', '<br/>');
function paragraph(t){
    document.write(`<p>Завдання 5. ${t}</p>`);
    console.log(`<p>Завдання 5. ${t}</p>`);
}
let text = 'Lorem ipsum dolor sit amet.'
paragraph(text);
document.write(`***********************`,'<br/>');
console.log(`*******************`);

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write('Завдання 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий', '<br/>');
function ulLi(liTexxt){
    document.write(`<ul>`);
        document.write(`<li>Завдання 6. ${liTexxt}</li>`);
        document.write(`<li>Завдання 6. ${liTexxt}</li>`);
        document.write(`<li>Завдання 6. ${liTexxt}</li>`);
    document.write(`</ul>`);
}
let ulElement = 'Lorem ipsum dolor sit amet.'
ulLi(ulElement);
document.write(`***********************`,'<br/>');

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('Завдання 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. ' +
    'Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)', '<br/>');
function ulLiMod(liTexxt, count){
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>Завдання 7. ${liTexxt}</li>`);
    }
    document.write(`</ul>`);
}
ulElement = 'Lorem ipsum dolor sit amet.';
let count = 5;
ulLiMod(ulElement, count);
document.write(`***********************`,'<br/>');

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write('Завдання 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список.', '<br/>');
function liFunc(a) {
    for (let i = 0; i < a.length; i++) {
        document.write(`<li>Завдання 8. ${a[i]}</li>`);
    }
}
let arrayLi = [54,87,'true', null, false];
liFunc(arrayLi);
document.write(`***********************`,'<br/>');

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
document.write('Завдання 9. створити функцію яка приймає масив об\'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
    'Для кожного об\'єкту окремий блок.', '<br/>');

let userInfo =[
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];

function userCard(list){
    // console.log(list)
    for (const listElement of list) {
        console.log(listElement)
        document.write(`<div class="user_info">`)
            document.write(`<h3>ID: ${listElement.id}</h3>`)
            document.write(`<h3>Name: ${listElement.name}</h3>`)
            document.write(`<h3>Age: ${listElement.age}</h3>`,'<br/>')

        document.write(`</div>`)
    }
}
userCard(userInfo)