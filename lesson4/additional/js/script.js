// 1. створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// 2. створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
//     результат
//     [3,5,7,9]
//
// 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//     EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// 4. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//     EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// 1. створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
document.write('Завдання 1. створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.', '<br/>');
function check(a,b){
    if (b === undefined ){
        return (`Заданно тільки а: ${a}`);
    }else {
    return (`Заданно а i b: ${a}`);
    }
}
let checkArrArrResult = check(468, 26);
console.log(`Завдання 1.  ${checkArrArrResult}`);
document.write(`Завдання 1.  ${checkArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 2. створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
document.write('Завдання 2. Створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.', '<br/>');
function sumArr(a,b){
    let newsumArr = [];
    for (let i = 0; i < a.length; i++) {
        newsumArr.push(a[i] + b[i])
    }
    return newsumArr
}
let arr1 = [455, 55, 8, 4, 85];
let arr2 = [54, 64, 13, 954, 32];
let sumArrArrResult = sumArr(arr1, arr2);
console.log(`Завдання 2. новий результуючий масив: ${sumArrArrResult}`);
document.write(`Завдання 2. новий результуючий масив: ${sumArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

document.write('Завдання 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів', '<br/>');
function keyObjectArr(a){
    let newsumArr = [];
    for (const aKey in a) {
        newsumArr.push(Object.keys(a[aKey]))
    }
    return newsumArr
}
let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let objArrArrResult = keyObjectArr(arrObj);
console.log(`Завдання 3. новий результуючий масив: ${objArrArrResult}`);
document.write(`Завдання 3. новий результуючий масив: ${objArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 4. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

document.write('Завдання 4. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів.', '<br/>');
function valueObjectAtrr(a){
    let newsumArr = [];
    for (const aKey in a) {
        newsumArr.push(Object.values(a[aKey]))
    }
    return newsumArr
}
let arrObjValue = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let objValueArrArrResult = valueObjectAtrr(arrObjValue);
console.log(`Завдання 4. масив значень всіх обєкті: ${objValueArrArrResult}`);
document.write(`Завдання 4. масив значень всіх обєкті: ${objValueArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");
