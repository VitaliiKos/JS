// 1.
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

//     + З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//     + За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//     - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//     + За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


let newArrAddress = [];

users.forEach(user=>{
    newArrAddress.push(user);
    let oneblok = document.createElement("div");
    oneblok.innerText = `${user.name}, ${user.age}, ${user.status}, ${user.address.city}, ${user.address.country},
        ${user.address.street}, ${user.address.houseNumber}`;
    document.body.appendChild(oneblok);

})
console.log(newArrAddress);

// **************************************
for (const user of users) {

    let itemKey = Object.keys(user);
    let itemAddressKey = Object.keys(user.address);

    let userInfo = document.createElement("div");
        userInfo.classList.add('userInfo');
    let userName = document.createElement("div");
        userName.classList.add('userName');
        userName.innerText = itemKey[0] + " : " + user.name;
    let userAge = document.createElement("div");
        userAge.classList.add('userAge');
        userAge.innerText = itemKey[1]+" : "+ user.age;
    let userStatus = document.createElement("div");
        userStatus.classList.add('userStatus');
        userStatus.innerText = itemKey[2] + " : " + user.status;
    let userAddress = document.createElement("div");
        userAddress.classList.add('userAddress');
        userAddress.innerText = itemKey[3] + " : ";


    let userCity = document.createElement("div");
        userCity.classList.add('userCity');
        userCity.innerText = itemAddressKey[0] + " : " + user.address.city;
    let userCountry =document.createElement("div");
        userCountry.classList.add('userCountry');
        userCountry.innerText = itemAddressKey[1] + " : " + user.address.country;
    let userStreet =document.createElement("div");
        userStreet.classList.add('userStreet');
        userStreet.innerText = itemAddressKey[2] + " : " + user.address.street;
    let userHouseNumber = document.createElement("div");
        userHouseNumber.classList.add('userHouseNumber');
        userHouseNumber.innerText = itemAddressKey[3] + " : " + user.address.houseNumber;

    document.body.appendChild(userInfo);
    userInfo.append(userName,userAge,userStatus,userAddress);
    userAddress.append(userCity,userCountry,userStreet,userHouseNumber);
}

// 2. є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі. Cтворити скріпт,
// котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let idContent = document.getElementById('content');

let ul = document.createElement('ul');
    ul.classList.add('ulElement');
    idContent.appendChild(ul);

let  h2Arr = document.getElementsByTagName('h2');
for (const h2ArrElement of h2Arr) {
    let li = document.createElement('li');
        li.classList.add('liElement');

    let a = document.createElement('a');
        a.innerText = h2ArrElement.innerText;
        a.href = "#";

    li.append(a);
    ul.appendChild(li);
}


// 3.Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило
// в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
rules.forEach(rule=>{
    let blockRule = document.createElement('div');
        blockRule.classList.add('blockRule');

    let bodyElement = document.createElement('p');
        bodyElement.classList.add('bodyElement');
        bodyElement.innerText = rule.body;
    let titleElement = document.createElement('h2');
        titleElement.classList.add('titleElement');
        titleElement.innerText = rule.title;

    document.body.appendChild(blockRule);
    blockRule.append( titleElement, bodyElement);
});