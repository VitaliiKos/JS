// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// 1. Cтворити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
for (const user of users) {
    let userBlock = document.createElement("div");
    userBlock.style.border = '2px solid green';
    userBlock.style.padding = '10px';
    userBlock.style.margin = '5px';
    userBlock.style.borderRadius = '10px';
    userBlock.style.background = '#e5dede';

    let userName = document.createElement("h3");
    userName.innerText =` Name : ${user.name}`;
    let userAge = document.createElement("h3");
    userAge.innerText = `Age : ${user.age}`;
    let userStatus = document.createElement("h3");
    userStatus.innerText = ` Status : ${user.status}`;

    let btnFavorite = document.createElement("button");
    btnFavorite.innerText = 'Add to favorites';
    btnFavorite.classList.add('favorite');
    btnFavorite.style.background = 'yellowgreen';
    btnFavorite.style.padding = '5px 10px';
    btnFavorite.type = 'submit';
    document.body.appendChild(userBlock);
    userBlock.append(userName, userAge, userStatus, btnFavorite);
    btnFavorite.addEventListener('mousedown', function () {
        if (localStorage.getItem('favoritesUsers')) {
            let data = localStorage.getItem('favoritesUsers');
            let favoritesParse = JSON.parse(data);
            favoritesParse.push({'Name': user.name, 'Age': user.age, 'Status': user.status});
            localStorage.setItem('favoritesUsers', JSON.stringify(favoritesParse));
        } else {
            let favoritesUsers = [];
                favoritesUsers.push({'Name': user.name, 'Age': user.age, 'Status': user.status});
                localStorage.setItem('favoritesUsers', JSON.stringify(favoritesUsers));
        }
        btnFavorite.disabled = true;
    })
}
document.body.appendChild(document.createElement("hr"));

