// 2. Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let data = localStorage.getItem('favoritesUsers');
let users = JSON.parse(data);
for (const user of users) {
    console.log(user);
    let userContent = document.createElement("div");
    userContent.style.border = '2px solid green';
    userContent.style.padding = '10px';
    userContent.style.margin = '5px';
    userContent.style.borderRadius = '10px';
    userContent.style.background = '#e5dede';

    let userName = document.createElement("h3");
    userName.innerText =` Name : ${user.Name}`;
    let userAge = document.createElement("h3");
    userAge.innerText = `Age : ${user.Age}`;
    let userStatus = document.createElement("h3");
    userStatus.innerText = ` Status : ${user.Status}`;
    document.body.appendChild(userContent);
    userContent.append(userName, userAge, userStatus);
}
