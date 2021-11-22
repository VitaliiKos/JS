// Всі функції повинні бути описані стрілочним типом!!!!
// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 3. створити функцію яка повертає найбільше число з масиву
// 4. створити функцію яка повертає найменьше число з масиву
// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// 8. створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

document.write('Завдання 1. створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)', '<br/>');

let a = 77;
let b = 45;
let c = 34;
let minValue = (a, b, c) => (a < b && a < c) ? a : (b < a && b < c) ? b : c;
console.log(`Завдання 1. Найменше число: ${minValue(a, b, c)}`);
document.write(`Завдання 1. Найменше число: ${minValue(a, b, c)}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
document.write(' Завдання 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)', '<br/>');

let maxValue = (a, b, c) => (a > b && a > c) ? a : (b > a && b > c) ? b : c;
console.log(`Завдання 2. Найбільше число: ${maxValue(a, b, c)}`);
document.write(`Завдання 2. Найбільше число: ${maxValue(a, b, c)}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');


// 3. створити функцію яка повертає найбільше число з масиву
document.write(' Завдання 3. створити функцію яка повертає найбільше число з масиву', '<br/>');

let maxArrValue = (a) => {
    let maxValue = a[0];
    for (let i = 1; i < a.length; i++) maxValue = (maxValue < a[i]) ? a[i] : maxValue;

    return maxValue;
};
arr = [255, 449, 115, 58, 525, 44];

console.log(`Завдання 3. Найбільше число з масиву: ${maxArrValue(arr)}`);
document.write(`Завдання 3. Найбільше число з масиву: ${maxArrValue(arr)}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');

// 4. створити функцію яка повертає найменьше число з масиву
document.write(' Завдання 4. створити функцію яка повертає найменьше число з масиву', '<br/>');

let minArrValue = (a) => {
    let minValue = a[0];
    for (let i = 1; i < a.length; i++) minValue = (minValue > a[i]) ? a[i] : minValue;
    return minValue;
}
arr = [255, 449, 115, 58, 525, 44];

console.log(`Завдання 4. Найменше число з масиву: ${minArrValue(arr)}`);
document.write(`Завдання 4. Найменше число з масиву: ${minArrValue(arr)}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');

// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
document.write(' Завдання 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13', '<br/>');

let sumArrValue = (a) => {
    let sumValue = 0;
    for (let i = 0; i < a.length; i++) sumValue += a[i];
    return sumValue;
}
arr = [255, 449, 115, 58, 525, 44];

console.log(`Завдання 5. Cумa значень елементів масиву: ${sumArrValue(arr)}`);
document.write(`Завдання 5. Cумa значень елементів масиву: ${sumArrValue(arr)}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');

// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
document.write(' Завдання 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.', '<br/>');

let sumAvgArrValue = (a) => {
    let sumAvgValue = 0;
    for (let i = 0; i < a.length; i++) sumAvgValue += a[i];
    return sumAvgValue / a.length;
}
arr = [255, 449, 115, 58, 525, 44];

console.log(`Завдання 6. Cереднє арифметичне значень елементів масиву: ${sumAvgArrValue(arr)}`);
document.write(`Завдання 6. Cереднє арифметичне значень елементів масиву: ${sumAvgArrValue(arr)}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');

// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
document.write(' Завдання 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено).', '<br/>');

let minMaxArrValue = (...arguments) => {
    let minArgValue = arguments[0];
    let maxArgValue = arguments[0];
    for (const item of arguments) {
        minArgValue = (minArgValue > item) ? item : minArgValue;
        maxArgValue = (maxArgValue < item) ? item : maxArgValue;
    }
    console.log(`Завдання 7. Найбільше число: ${maxArgValue}`);
    document.write(`Завдання 7. Найбільше число: ${maxArgValue}`, '<br/>');
    return minArgValue;
};
let minMaxArrValueResult = minMaxArrValue(22, 449, 115, 58, 525, 44);
console.log(`Завдання 7. Найменше число: ${minMaxArrValueResult}`);
document.write(`Завдання 7. Найменше число: ${minMaxArrValueResult}`, '<br/>');
console.log(`**********************`);
document.write(`**********************`, '<br/>');

// 8. створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
document.write('Завдання 8. створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в ' +
    'діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.', '<br/>');
let newRandomArr = [];
let randomArr = (size) => {
    for (let i = 0; i < size; i++) newRandomArr[newRandomArr.length] = (Math.round(Math.random() * 100));
    return newRandomArr;
}

let randomArrArrResult = randomArr(10);
console.log(`Завдання 8. Масив рандомних чисел: ${randomArrArrResult}`);
document.write(`Завдання 8. Масив рандомних чисел: ${randomArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
document.write('Завдання 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. ' +
    'limit - аргумент, який характеризує кінцеве значення діапазону.', '<br/>');
let randomLimitArr = (size, limit) => {
    let newRandomArr = [];
    for (let i = 0; i < size; i++) newRandomArr[newRandomArr.length] = (Math.round(Math.random() * limit));
    return newRandomArr;
}

let randomLimitArrArrResult = randomLimitArr(10, 1000);
console.log(`Завдання 9. Масив рандомних чисел: ${randomLimitArrArrResult}`);
document.write(`Завдання 9. Масив рандомних чисел: ${randomLimitArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
document.write('Завдання 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].', '<br/>');
let newReverseArr = [];
let reversArr = (a) => {
    for (let i = a.length - 1; i >= 0; i--) newReverseArr[newReverseArr.length] = a[i];
    return newReverseArr;
}
arr = [255, 449, 115, 58, 525, 44];
let reversArrArrResult = reversArr(arr);
console.log(`Завдання 10. Hовий масив в зворотньому порядку: ${reversArrArrResult}`);
document.write(`Завдання 10. Hовий масив в зворотньому порядку: ${reversArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");
