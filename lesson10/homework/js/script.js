// 1. Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике
// на кнопку исчезал элемент с id="text".

let idText = document.createElement("div");
    idText.id = 'text';
    idText.innerText = 'Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".';
    document.body.appendChild(idText);

let reset = document.createElement("button");
    reset.id = 'reset';
    reset.innerText = 'reset';
    document.body.appendChild(reset);
    reset.style.margin = '10px';
    reset.style.background = 'pink';



idText.onmousedown = function () {
    this.hidden = true;
}
let resetIdText = document.getElementById('reset');
    resetIdText.onclick = function () {
    idText.hidden = false;
}
document.body.appendChild(document.createElement('hr'));

// 2. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let invisibleBtn = document.createElement("button");
    invisibleBtn.id = 'invisibleBtn';
    invisibleBtn.innerText = 'invisibleBtn';
    document.body.appendChild(invisibleBtn);
    invisibleBtn.style.background = 'yellow';

let reset_invisibleBtn = document.createElement("button");
    reset_invisibleBtn.id = 'reset_invisibleBtn';
    reset_invisibleBtn.innerText = 'reset_invisibleBtn';
    document.body.appendChild(reset_invisibleBtn);
    reset_invisibleBtn.style.margin = '10px';
    reset_invisibleBtn.style.background = 'pink';

invisibleBtn.onmousedown = function () {
    this.hidden = true;
};
let resetInvisibleBtn = document.getElementById('reset_invisibleBtn');
    resetInvisibleBtn.onclick = function () {
        invisibleBtn.hidden = false;
}
document.body.appendChild(document.createElement('hr'));

// 3. створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let formUser = document.createElement("form");
    formUser.id = 'formUser';
    document.body.appendChild(formUser);

let inputAge =  document.createElement("input");
    inputAge.type = 'number';
    inputAge.name = 'age';
    inputAge.placeholder = 'Введіть свій вік';

let btnInput = document.createElement("button");
    btnInput.classList.add('btnInput');
    btnInput.innerText = 'Відправити';
    btnInput.style.margin = '10px';
    btnInput.style.background = 'yellowgreen';
    formUser.append(inputAge, btnInput);

let checkAge = document.forms.formUser;
    checkAge.onsubmit = function (e) {
        e.preventDefault();
        if(+this.age.value < 18){
            alert('Вам менше 18 років. Ви не можете бути членом нашого клубу');
        }else {
            alert('Вітаємо в бійцівському клубі');
        }
    }
document.body.appendChild(document.createElement('hr'));

// 4. Создайте меню, которое раскрывается/сворачивается при клике
let ul = document.createElement("ul");
    ul.id = 'menuList';
    ul.style.border = '1px solid green';
    ul.style.background = '#e7bf47';
let h3 = document.createElement('h3');
    h3.id = 'h3MainMenu';
    h3.innerText = 'Main menu';
let li = document.createElement('li');
    li.style.margin = '5px 5px 15px 15px';
    li.classList.add('liElement');
    li.innerText = 'Menu';
document.body.appendChild(ul);
ul.append(h3, li, li.cloneNode(true), li.cloneNode(true), li.cloneNode(true), li.cloneNode(true));

let showLi = document.querySelectorAll('.liElement');
ul.onclick = function () {
    for (const argument of showLi) {
        argument.classList.toggle('menu');
    }
}
document.body.appendChild(document.createElement('hr'));

// 5. Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let arrComment = [
    {title:'Київ', body: 'Населення: 2 611 327'},
    {title:'Харків', body: 'Населення: 1 470 902'},
    {title:'Одеса', body: 'Населення: 1 029 049'},
    {title:'Дніпро', body: 'Населення: 1 080 846'},
    {title:'Донецьк', body: 'Населення: 1 016 194'},
    {title:'Запоріжжя[', body: 'Населення: 817 882'},
    {title:'Львів', body: 'Населення: 732 818'}
];
for (const comment of arrComment) {
    let blockComment = document.createElement('div');
    blockComment.classList.add('blockComment');
    blockComment.style.border = '2px solid #000000';
    blockComment.style.padding = '10px';
    blockComment.style.margin = '10px';
    blockComment.style.width = '30%'

    let titleComment = document.createElement('h3');
        titleComment.classList.add('titleComment');
        titleComment.innerText = comment.title;
        titleComment.style.borderBottom = '2px solid #000000';

    let bodyComment = document.createElement('p');
        bodyComment.classList.add('bodyComment');
        bodyComment.innerText = comment.body;
        bodyComment.style.borderBottom = '2px solid #000000';


    document.body.appendChild(blockComment);
    let btnBody = document.createElement("button");
        btnBody.classList.add('btnBody');
        btnBody.innerText = 'Detail';
        btnBody.style.background = 'yellowgreen';
        btnBody.style.margin = '10px';

    blockComment.append(titleComment, bodyComment,btnBody);
    console.log(comment.title);


btnBody.onclick = function () {
    bodyComment.classList.toggle('menu');
}
}
