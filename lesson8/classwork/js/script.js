// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

//a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let textColor = document.getElementById('main_header');
textColor.classList.add('sep-2021');

//b) робить шириниу елементу ul 400px
let widthElement = document.getElementsByTagName('ul');
for (const element of widthElement) {
    element.style.background = 'yellow';
    element.style.width = '400px';
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLinkList = document.getElementsByClassName('linkList');
for (const listElement of widthLinkList) {
    listElement.style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2
let textElement = document.getElementsByClassName('listElement2');
for (const text of textElement) {
    console.log(text.innerText);
}

//e) отримує всі елементи li та змінює ім колір фону на сірий
let colorLi = document.getElementsByTagName('li');
for (const li of colorLi) {
    li.style.background = 'silver';
}

//f) отримує всі елементи 'a' та додає їм клас anchor
let addClass = document.querySelectorAll('a');
for (const a of addClass) {
    a.classList.add(`anchor`);
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let fontSizeElement = document.querySelectorAll('a');
for (const a of fontSizeElement) {
    if (a.innerText.includes( 'link3')){
        a.style.fontSize = '40px';
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElement = document.querySelectorAll('a');
for (const a of aElement) {
    a.classList.add(`element_${a.innerText}`);
}
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderColor = document.querySelectorAll('.sub-header');
for (const elem of subHeaderColor) {
    elem.style.background = prompt('Background: ', '#65f76f');
}

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
//     Колір отримати з prompt()
let subHeaderTextColor = document.querySelectorAll('.sub-header');
for (const elem of subHeaderTextColor) {
    if (elem.innerText.includes('content 2 segment')){
        elem.style.color = prompt('Color', '#fff71e');
    }
}

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textClass = document.getElementsByClassName('content_1');
console.log(textClass)
for (const text of textClass) {
    for (const pText of text.children) {
        pText.innerText = `${prompt("Введіть текст: ", 'Lorem lorem Lorem')}`
    }
}
//     l) отримати елементи p та змінити їм padding на 20px
let paddingP = document.querySelectorAll('p');
for (const pElement of paddingP) {
    pElement.style.padding ='20px';
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let pElement = document.getElementsByClassName('text2');
for (const p of pElement) {
    p.innerText = 'sep-2021';
}
