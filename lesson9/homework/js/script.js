// Все робити за допомоги js.
// 1. створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
//     - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//     - додати цей блок в body.
//     - клонувати його повністю, та додати клон в body.
let divElement = document.createElement('div');
divElement.innerText = 'Завдання 1.';

divElement.classList.add('wrap');
divElement.classList.add('collapse');
divElement.classList.add('alpha');
divElement.classList.add('beta');

divElement.style.background = '#f7d00c';
divElement.style.color = '#066a74';
divElement.style.fontSize = '30px';
divElement.style.margin = '5px';

document.body.appendChild(divElement);

let cloneDiv = divElement.cloneNode(true);
document.body.appendChild(cloneDiv);


// 2. Є масив:
//     ['Main','Products','About us','Contacts']
//     Взяти файл template1.html та додати в нього скріпт
//     отрий для кожного елементу масиву створює li та додає його до блоку .menu
//     Завдання робити через цикли.

let productList = ['Main','Products','About us','Contacts'];
let findMenu = document.getElementsByClassName('menu');
for (const product of productList) {
    let liElement = document.createElement('li');
    liElement.innerText = product;
    findMenu[0].appendChild(liElement);
}
    console.log(findMenu);
// 3. Є масив
//     Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//     Завдання робити через цикли.
let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
for (const course of coursesAndDurationArray) {
    let blockElement = document.createElement('div');
    blockElement.innerText = course.title + ' - ' + course.monthDuration;
    document.body.appendChild(blockElement);
}
document.write('******************************');
// 4. Є масив
//     let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
//     За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     якому буде <h1 class='heading'>  з title  елементу,
//     та <p class='description'> з monthDuration елементу.
//         Завдання робити через цикли.
//
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray2) {
    let divElem = document.createElement('div');
    let h1Elem = document.createElement('h1');
    let pElem = document.createElement('p');


    divElem.setAttribute('class', 'item');
    h1Elem.setAttribute('class', 'heading');
    pElem.setAttribute('class', 'description');

    document.body.appendChild(divElem);
    divElem.appendChild(h1Elem);
    divElem.appendChild(pElem);
    h1Elem.innerText = course.title;
    pElem.innerText = course.monthDuration;

}