// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 3. створити функцію яка повертає найбільше число з масиву
// 4. створити функцію яка повертає найменьше число з масиву
// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// 6 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// 8. створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// 9 створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
document.write('Завдання 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)', '<br/>')
function min(a, b, c){
    let newMin = a;
    if (newMin > b){
        newMin = b;
    }
    if (newMin > c ){
        newMin = c;
    }
    return newMin
}
let minResult = min(25, 19, 115);
console.log(`Завдання 1. Найменше число: ${minResult}`);
document.write(`Завдання 1. Найменше число: ${minResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
document.write('Завдання 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)', '<br/>');
function max(a, b, c){
    let newMax = a;
    if (newMax < b){
        newMax = b;
    }
    if (newMax < c ){
        newMax = c;
    }
    return newMax
}
let maxResult = max(25, 19, 115);
console.log(`Завдання 2. Найбільше число: ${maxResult}`);
document.write(`Завдання 2. Найбільше число: ${maxResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 3. створити функцію яка повертає найбільше число з масиву
document.write('Завдання 3. створити функцію яка повертає найбільше число з масиву', '<br/>');
function maxArr(a){
    let newMaxArr = a[0];
    for (let i = 1; i < a.length; i++) {
        if (newMaxArr < a[i]){
            newMaxArr = a[i];
        }
    }
    return newMaxArr;
}
arr = [255, 449, 115, 54, 525, 44];
let maxArrResult = maxArr(arr);
console.log(`Завдання 3. Найбільше число з масиву: ${maxArrResult}`);
document.write(`Завдання 3. Найбільше число з масиву: ${maxArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 4. створити функцію яка повертає найменьше число з масиву
document.write('Завдання 4. створити функцію яка повертає найменьше число з масиву', '<br/>');
function minArr(a){
    let newMaxArr = a[0];
    for (let i = 1; i < a.length; i++) {
        if (newMaxArr > a[i]){
            newMaxArr = a[i];
        }
    }
    return newMaxArr;
}
arr = [22, 449, 115, 54, 525, 44];
let minArrResult = minArr(arr);
console.log(`Завдання 4. Найменше число з масиву: ${minArrResult}`);
document.write(`Завдання 4. Найменше число з масиву: ${minArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
document.write('Завдання 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. ' +
    'Приклад [1,2,10]->13', '<br/>');
function sumArr(a){
    let newMaxArr = a[0];
    for (let i = 1; i < a.length; i++) {
        newMaxArr += a[i];
    }
    return newMaxArr;
}
arr = [22, 449, 115, 54, 525, 44];
let sumArrResult = sumArr(arr);
console.log(`Завдання 5. Сума чисел з масиву: ${sumArrResult}`);
document.write(`Завдання 5. Сума чисел з масиву: ${sumArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 6 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
document.write('Завдання 6 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. ', '<br/>');
function averageArr(a){
    let newMaxArr = a[0];
    for (let i = 1; i < a.length; i++) {
        newMaxArr += a[i];
    }
    return newMaxArr/a.length;
}
arr = [22, 449, 115, 54, 525, 44];
let averageArrArrResult = averageArr(arr);
console.log(`Завдання 6. Cереднє арифметичне чисел з масиву: ${averageArrArrResult}`);
document.write(`Завдання 6. Cереднє арифметичне чисел з масиву: ${averageArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
document.write('Завдання 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено) ', '<br/>');
function minMaxArr(a){
    let newMinArr = a;
    let newMaxArr = a;
    for (let i = 1; i < arguments.length; i++) {
        if (newMinArr > arguments[i]){
            newMinArr = arguments[i];
        }
        if (newMaxArr < arguments[i]){
            newMaxArr = arguments[i];
        }
    }
    console.log(`Завдання 7. виводить найбільше ${newMaxArr}`);
    document.write(`Завдання 7. виводить найбільше ${newMaxArr}`, "<br/>");
    return newMinArr
}
let minMaxArrArrResult = minMaxArr(22, 449, 115, 54, 525, 44);
console.log(`Завдання 7. повертає найменьше: ${minMaxArrArrResult}`);
document.write(`Завдання 7. повертає найменьше: ${minMaxArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");


// 8. створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
document.write('Завдання 8. створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в ' +
    'діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.', '<br/>');
function randomArr(size){
    let newRandomArr = [];
    for (let i = 0; i < size; i++) {
        newRandomArr.push(Math.round(Math.random()*100));
    }
    return newRandomArr;
}
let randomArrArrResult = randomArr(10);
console.log(`Завдання 8. Масив рандомних чисел: ${randomArrArrResult}`);
document.write(`Завдання 8. Масив рандомних чисел: ${randomArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 9 створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
document.write('Завдання 9 створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. ' +
    'limit - аргумент, який характеризує кінцеве значення діапазону' , '<br/>');
function randomLimitArr(size, limit){
    let newRandomArr = [];
    for (let i = 0; i < size; i++) {
        newRandomArr.push(Math.round(Math.random()*limit));
    }
    return newRandomArr;
}
let randomLimitArrArrResult = randomLimitArr(10, 100);
console.log(`Завдання 9. Масив рандомних чисел: ${randomLimitArrArrResult}`);
document.write(`Завдання 9. Масив рандомних чисел: ${randomLimitArrArrResult}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
document.write('Завдання 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].',"<br/>");
function reversArr(a){
    newReverseArr = [];
    for (let i = a.length-1; i >= 0; i--) {
        newReverseArr.push(a[i]);
    }
    return newReverseArr;
    
}
arr = [22, 449, 115, 54, 525, 44];
let reversArrArrResult = reversArr(arr);
console.log(`Завдання 10.  масив: ${arr}`);
console.log(`Завдання 10. новий масив в зворотньому порядку: ${reversArrArrResult}`);
document.write(`Завдання 10. новий масив в зворотньому порядку: ${reversArrArrResult}`, "<br/>");
document.write(`Завдання 10.  масив: ${arr}`, "<br/>");
console.log('*************');
document.write('*************', "<br/>");

