// 1. Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

function showConsole(event) {
    console.log(event.target);
    console.log(`Назва тегу: ${event.target.localName}`);
    console.log(`Розмір блоку: ${event.target.offsetHeight} * ${event.target.offsetWidth}`);
    console.log(`Cписок класів: ${event.target.classList}`);
    console.log(`Cписок ID: ${event.target.id}`);
}
// document.onclick = showConsole;

// 2. Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
    let popup = document.createElement("div");
    popup.classList.add('popup')

    let popupSpan = document.createElement("span");
    popupSpan.id  = 'myPopup'
    popupSpan.classList.add('popuptext')
    document.body.prepend(popup)
    popup.append(popupSpan)

function showPopup(event) {
    let popup = document.getElementById("myPopup");

    popup.classList.toggle("show");
    popup.innerText = `Назва тегу: ${event.target.localName},
     Розмір блоку: ${event.target.offsetHeight} * ${event.target.offsetWidth}, 
     Cписок класів: ${event.target.classList}, 
     Cписок ID: ${event.target.id}`
}
// document.onclick = showPopup

// 3. -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.
//     1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//     2й - оставляет старше 29 лет включительно
//     3й - оставляет тех у кого город киев
//     Данные выводить в документ

let chooseOption = document.forms.checkForm;
let contWrap = document.getElementById('wrap_filterResult');
let wrapListUser = document.createElement("div")
wrapListUser.id = 'wrapListUser'
contWrap.append(wrapListUser)

    chooseOption.onsubmit = function (event) {
        while (wrapListUser.firstChild) {
            wrapListUser.removeChild(wrapListUser.firstChild);
        }
        event.preventDefault();
        let chooseAge = this.age.checked;
        let chooseStatus = this.status.checked;
        let chooseCity = this.city.checked;
        let resAge = usersWithAddress.filter(res =>
            (chooseAge ? res.age > 29: true)
            && (chooseStatus ? res.status === false: true)
            && (chooseCity ? res.address.city === 'Kyiv' : true));
        resAge.forEach(user =>{
            let filterResult = document.createElement("em")
            filterResult.innerText = `
            id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`;
            wrapListUser.appendChild(filterResult);
        })
}

    // 6. Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

document.getElementById("select").onclick = function() {
    let range
    let sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
         range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    document.execCommand("bold", false, );
    document.execCommand("italic", false, );
    document.execCommand("fontSize", false, 5);
    document.execCommand("backColor", false, 'pink');
    document.designMode = "off";
}
