// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// 6. Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

document.write("Завдання 1. Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'", '<br/>');
let strOne = 'hello world'.length;
let strTwo = 'lorem ipsum'.length;
let strThree = 'javascript is cool'.length;

console.log(`Завдання 1. Довжина настипних стрінгових значень: hello world: ${strOne}, lorem ipsum: ${strTwo}, javascript is cool ${strThree}`);
document.write(`Завдання 1. Довжина настипних стрінгових значень:  <br/> hello world: ${strOne}  <br/> lorem ipsum: ${strTwo} <br/> javascript is cool ${strThree}`, '<br/>');
console.log('****************');
document.write('****************', '<br/>');

// 2. Перевести до великого регістру наступні стрінгові значення  'hello world', 'lorem ipsum', 'javascript is cool'
document.write("Завдання 2. Перевести до великого регістру наступні стрінгові значення  'hello world', 'lorem ipsum', 'javascript is cool'", '<br/>');
let strOneUpper = 'hello world'.toUpperCase();
let strTwoUpper = 'lorem ipsum'.toUpperCase();
let strThreeUpper = 'javascript is cool'.toUpperCase();

console.log(`Завдання 2: hello world: ${strOneUpper}, lorem ipsum: ${strTwoUpper}, javascript is cool: ${strThreeUpper}`);
document.write(`Завдання 2:<br/> hello world: ${strOneUpper},<br/> lorem ipsum: ${strTwoUpper},<br/> javascript is cool: ${strThreeUpper}`, '<br/>');
console.log('****************');
document.write('****************', '<br/>');

// 3. Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
document.write("Завдання 3. Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'", '<br/>');
let strOneLower = 'HELLO WORLD'.toLowerCase();
let strTwoLower = 'LOREM IPSUM'.toLowerCase();
let strThreeLower = 'JAVASCRIPT IS COOL'.toLowerCase();

console.log(`Завдання 3: HELLO WORLD: ${strOneLower}, LOREM IPSUM: ${strTwoLower}, AVASCRIPT IS COOL: ${strThreeLower}`);
document.write(`Завдання 3:<br/> HELLO WORLD: ${strOneLower},<br/> LOREM IPSUM: ${strTwoLower},<br/> AVASCRIPT IS COOL: ${strThreeLower}`, '<br/>');
console.log('****************');
document.write('****************', '<br/>');

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
document.write(`Завдання 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.`, '<br/>');
let strOneTrim = ' dirty string   '.trim();

console.log(`Завдання 4: ' dirty string   ': ${strOneTrim}`);
document.write(`Завдання 4: ' dirty string   ': '${strOneTrim}'`, '<br/>');
console.log('****************');
document.write('****************', '<br/>');


// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
document.write(`Завдання 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.`, '<br/>');

let stringToarray = (str) => str.split(' ');

let strOneSplit = 'Каждый охотник желает знать';
console.log(`Завдання 5. ${stringToarray(strOneSplit)}, Array.isArray: ${Array.isArray(stringToarray(strOneSplit))}`);
document.write(`Завдання 5. ${stringToarray(strOneSplit)}, Array.isArray: ${Array.isArray(stringToarray(strOneSplit))}`, '<br/>');
console.log('****************');
document.write('****************', '<br/>');


// 6. Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
document.write(`Завдання 6. Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.`, '<br/>');

let delete_characters = (str, length) => str.split(' ').filter(word => word.length === length);


let strOneSplitFilter = 'Каждый охотник желает знать';
let strLength = 7;

document.write(`Завдання 6. ${delete_characters(strOneSplitFilter, strLength)}`, '<br/>');
console.log(`Завдання 6. ${delete_characters(strOneSplitFilter, strLength)}`);
console.log('****************');
document.write('****************', '<br/>');


// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

document.write(`Завдання 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. 
    При цьому всі символи рядка необхідно перевести у верхній регістр.`, '<br/>');

let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();

let strOneReplace = "HTML JavaScript PHP";

document.write(`Завдання 7. ${insert_dash(strOneReplace)}`, '<br/>');
console.log(`Завдання 7. ${insert_dash(strOneReplace)}`);
console.log('****************');
document.write('****************', '<br/>');

// 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
document.write(`Завдання 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.`, '<br/>');

let capitalizeFirstLetterOne = (str) => str[0].toUpperCase() + str.slice(1);
let capitalizeFirstLetterTwo = (str) => str.charAt(0).toUpperCase() + str.slice(1);

let strCapitalize = "каждый охотник желает знать";

document.write(`Завдання 8. <br>ver1: ${capitalizeFirstLetterOne(strCapitalize)},<br> ver2: ${capitalizeFirstLetterTwo(strCapitalize)}`, '<br/>');
console.log(`Завдання 8. ver1: ${capitalizeFirstLetterOne(strCapitalize)}, ver2: ${capitalizeFirstLetterTwo(strCapitalize)}`);
console.log('****************');
document.write('****************', '<br/>');

// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
document.write(`Завдання 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.`, '<br/>');

let capitalize = (str) => {
    let strSplit = str.split(' ');
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].slice(1);
    }
    return strSplit.join().replaceAll(',', ' ');
};

let strCapitalizeAll = "Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери";

document.write(`Завдання 9. ${capitalize(strCapitalizeAll)}`, '<br/>');
console.log(`Завдання 9. ${capitalize(strCapitalizeAll)}`);
console.log('****************');
document.write('****************', '<br/>');
