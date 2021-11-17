// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


console.log('Завдання 1-a: заповнити його 50 парними числами за допомоги циклу');
let empty_arr= [];
for (let i = 0; empty_arr.length < 50; i+=2) {
    empty_arr.push(i);
}
document.write(`Завдання 1-a:  ${empty_arr}`,"<br/>");
console.log(empty_arr);
document.write(`**************************`,"<br/>");
console.log('************************');

console.log('Завдання 1-b: заповнити його 50 непарними числами за допомоги циклу');
empty_arr= [];
for (let i = 1; empty_arr.length < 50; i+=2) {
    empty_arr.push(i);
}
document.write(`Завдання 1-b:  ${empty_arr}`,"<br/>");
console.log(empty_arr);
document.write(`**************************`,"<br/>");
console.log('************************');

console.log('Завдання 1-c: Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)');
empty_arr= [];
while (empty_arr.length < 20){
    empty_arr.push(Math.floor(Math.random() * 1000));
}
document.write(`Завдання 1-c:  ${empty_arr}`,"<br/>");
console.log(empty_arr);
document.write(`**************************`,"<br/>");
console.log('************************');

console.log('Завдання 1-d: Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)');
empty_arr= []
while (empty_arr.length < 20){
    let min = Math.ceil(8);
    let max = Math.floor(732);
    empty_arr.push(Math.floor(Math.random() * (max - min)) + min);
}
document.write(`Завдання 1-d:  ${empty_arr}`,"<br/>");
console.log(empty_arr);
document.write(`**************************`,"<br/>");
console.log('************************');

// 2. Вивести за допомогою console.log кожен третій елемен
console.log('Завдання 2: Вивести за допомогою console.log кожен третій елемен)');
for (let i = 2; i < empty_arr.length; i+=3) {
    document.write(`Завдання 2:  ${empty_arr[i]}`,"<br/>");
    console.log(empty_arr[i]);

}
document.write(`**************************`,"<br/>");
console.log('************************');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('Завдання 3: Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.)');
for (let i = 2; i < empty_arr.length; i+=3) {
    if (empty_arr[i] % 2 === 0){
        document.write(`Завдання 3:  ${empty_arr[i]}`,"<br/>");
        console.log(empty_arr[i]);
    }
}
document.write(`**************************`,"<br/>");
console.log('************************');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('Завдання 4: Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив.)');
let new_empty_arr = [];
for (let i = 0; i < empty_arr.length; i+=3) {
    if (empty_arr[i] % 2 === 0){
        new_empty_arr.push(empty_arr[i]);
        document.write(`Завдання 4:  ${empty_arr[i]}`,"<br/>");
        console.log(empty_arr[i]);
    }
}
document.write(`Завдання 4: ${new_empty_arr}`,"<br/>");
document.write(`**************************`,"<br/>");
console.log('************************');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log('Завдання 5: Вивести кожен елемент масиву, сусід справа якого є парним.)');
document.write(` ${empty_arr}`,"<br/>");
console.log(empty_arr);
for (let i = 0; i < empty_arr.length-1; i++) {
    if (empty_arr[i+1] % 2 === 0){
        document.write(`Завдання 5:  ${empty_arr[i]}`,"<br/>");
        console.log(empty_arr[i]);
    }
}
document.write(`**************************`,"<br/>");
console.log('************************');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('Завдання 6: Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.)');

let price_arr = [100,250,50,168,120,345,188];
let sum_price = 0;
for (let i = 0; i < price_arr.length; i++) {
    sum_price += price_arr[i];
}
document.write(`Завдання 6: Загальна сума-  ${sum_price}. середній чек- ${Math.round(sum_price/price_arr.length * 100) / 100}`,"<br/>");
console.log(`${Math.round(sum_price/price_arr.length * 100) / 100}`);
document.write(`**************************`,"<br/>");
console.log('************************');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('Завдання 7: Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.)');
empty_arr= [];
new_empty_arr =[];
while (empty_arr.length < 10){
    empty_arr.push(Math.floor(Math.random() * 100));
}
for (let i = 0; i < empty_arr.length; i++) {
    new_empty_arr.push(empty_arr[i]*5);

}
document.write(`Завдання 7: ${empty_arr} `,"<br/>");
document.write(`Завдання 7:  ${new_empty_arr} `,"<br/>");
console.log(`Завдання 7:  ${empty_arr}`);
console.log(`Завдання 7: ${new_empty_arr} `);
document.write(`**************************`,"<br/>");
console.log('************************');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr_task8 = [21, true, '89', 465, 'false', null, NaN, 52];
let new_arr_task8 = [];

for (const item of arr_task8) {
    if (typeof item === 'number'){
        new_arr_task8.push(item);
            }
}
document.write(`Завдання 8: ${new_arr_task8}`,"<br/>");
console.log(`Завдання 8: ${new_arr_task8}`);
document.write(`**************************`,"<br/>");
console.log('************************');



// 9. Дано 2 масиви з рівною кількістю об'єктів.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let userInfo = [];

for (const user of usersWithId) {
    for (const cityInfo of citiesWithId) {
        if (user.id === cityInfo.user_id){
            let x = user;
            x.address = cityInfo;
            userInfo.push(x);
        }
    }
}
for (const userInfoElement of userInfo) {
    document.write(`******* Завдання 9 *****`,"<br/>");
    for (let key in userInfoElement){
        if ( key === "address") {
            for (let k in userInfoElement[key]) {
                document.write(`${key} ${k}: ${userInfoElement[key][k]}`, "<br/>");
            }
        }else {
            document.write(`${key}: ${userInfoElement[key]}`, "<br/>");
        }
    }
}
document.write(`**************************`,"<br/>");


//10. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
document.write('Завдання 10. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.)',"<br/>");

let mas = [51,5,22,58,2121,255,212,25,55,2,];
for (let i = 0; i < mas.length; i++) {
    if (mas[i] % 2 === 0){
        console.log(`Завдання 10. ${mas[i]}`);
        document.write(`Завдання 10. ${mas[i]}`,"<br/>");
    }
}
document.write(`**************************`,"<br/>");

// 11.Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
document.write('Завдання 11.Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. ' +
    'За допомогою будь-якого циклу скопіювати значення одного масиву в інший.)',"<br/>");
mas = [51,5,22,58,2121,255,212,25,55,2,];
let new_mas = [];
for (let i = 0; i < mas.length; i++) {
    new_mas.push(mas[i]);
}
console.log(`Завдання 11 ${new_mas}`);
document.write(`Завдання 11 ${new_mas}`,"<br/>");
document.write(`**************************`,"<br/>");

//12. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
document.write('12. Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for зібрати всі букви в слово. ',"<br/>")
let masLit = [ 'a', 'b', 'c'];
let res = ''
for (let i = 0; i < masLit.length; i++) {
    res += masLit[i];
}
document.write(`Завдання 12. ${res}`,"<br/>")
console.log(`Завдання 12. ${res}`)
document.write(`**************************`,"<br/>");

//13.  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
document.write('Завдання 13.  Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу while зібрати всі букви в слово.',"<br/>")
 masLit  = [ 'a', 'b', 'c'];
 res = '';
 i = 0
 while (i< masLit.length){
    res += masLit[i]
     i++
 }
document.write(`Завдання 13. ${res}`,"<br/>")
console.log(`Завдання 13. ${res}`)
document.write(`**************************`,"<br/>");


// 14. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
document.write('Завдання 14.  Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for of зібрати всі букви в слово.',"<br/>")
masLit  = [ 'a', 'b', 'c'];
res = '';
for (const re of masLit) {
    res += re;
}
document.write(`Завдання 14. ${res}`,"<br/>")
console.log(`Завдання 14. ${res}`)
document.write(`**************************`,"<br/>");
