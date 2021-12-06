// 1. створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
//     на консоль інформація з цих 2х форм. Кнопка повинна лежати за межами форм (Щоб ьуникнути
//     перезавантаження сторінки) Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let wrapFormFirst = document.createElement("div");
wrapFormFirst.style.margin = '10px';

let wrapFormSecond = document.createElement("div");
wrapFormSecond.style.margin = '10px';
let formFirst = document.createElement("form");
formFirst.id = 'formFirst';
formFirst.style.border = '2px solid blue';
wrapFormFirst.append(formFirst);
let input1 = document.createElement("input");
input1.style.margin = '10px';
input1.id = 'input1';
input1.placeholder = 'Введіть Ім\'я';
let input2 = document.createElement("input");
input2.id = 'input2';
input2.placeholder = 'Скільки вам років';

formFirst.append(input1, input2);


let formSecond = document.createElement("form");
formSecond.id = 'formSecond';
formSecond.style.border = '2px solid blue';
wrapFormSecond.append(formSecond);
let input3 = document.createElement("input");
input3.style.margin = '10px';
input3.id = 'input3';
input3.placeholder = 'Введіть Ім\'я';
let input4 = document.createElement("input");
input4.id = 'input4';
input4.placeholder = 'Скільки вам років';
formSecond.append( input3, input4);

let btnForm = document.createElement("button");
btnForm.style.marginLeft = '20px';
btnForm.innerText = 'Submit';
btnForm.style.background = 'yellowgreen';
document.body.append(wrapFormFirst, wrapFormSecond,btnForm);


btnForm.addEventListener('click', function () {
    console.log(document.forms.formFirst.input1.value);
    console.log(document.forms.formFirst.input2.value);
    console.log(document.forms.formSecond.input3.value);
    console.log(document.forms.formSecond.input4.value);
})

///////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement("hr"));
///////////////////////////////////////////////////////////////////////////////////////////////

// 2. Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//    (Додаткова частина для завдання)

let cell = document.createElement("div");
cell.classList.add('cell');
cell.style.margin = '15px 10px';
cell.style.padding = '0 25px';
cell.style.border = '2px solid blue';

let formCell = document.createElement("form");
formCell.id = 'formCell';

let rowInp = document.createElement("input");
rowInp.id = 'rowInp';
rowInp.type = 'number';
rowInp.placeholder = 'Введіть кількість рядків';
let columnInp = document.createElement("input");
columnInp.id = 'columnInp';
columnInp.type = 'number';
columnInp.style.margin = '15px';
columnInp.placeholder = 'Введіть кількість стовпців';
let contentInp = document.createElement("input");
contentInp.id = 'contentInp';
contentInp.type = 'text';
contentInp.placeholder = 'Введіть контент ';

let btnCell = document.createElement("button");
btnCell.innerText = 'Зберегти';
btnCell.style.margin = '15px';


document.body.appendChild(cell);
cell.appendChild(formCell);
formCell.append(rowInp,columnInp,contentInp, btnCell);

let cellResult = document.createElement("div");
cellResult.classList.add('cell');
cellResult.style.margin = '15px 5px';
cellResult.style.padding = '0 3px';
cellResult.style.border = '2px solid blue';
cellResult.style.display = 'flex';
cellResult.style.flexWrap = 'wrap';
cellResult.style.columnGap = '1px';
cellResult.style.rowGap = '1px';

btnCell.onclick=  function (e) {
document.body.appendChild(cellResult);
    e.preventDefault();
    let row = +document.forms.formCell.rowInp.value;
    let column = +document.forms.formCell.columnInp.value;
    let content = document.forms.formCell.contentInp.value;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let w = 70/column;

        console.log(w);
            let cardItem = document.createElement("div");
            cardItem.style.width = `${w}%`;
            cardItem.style.background = 'yellow';
            cardItem.style.border = '2px solid blue';
            cardItem.style.margin = '3px';

            let pItem = document.createElement("div");
            pItem.innerText = content;
            pItem.style.fontSize = '20px';
            cellResult.append(cardItem);
            cardItem.append(pItem);
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement("hr"));
///////////////////////////////////////////////////////////////////////////////////////////////

// 3. Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let swearWords = ['козел','алкаш','свиня','чувак','падлюка'];


let wrapInp = document.createElement('div');
wrapInp.style.border = '2px solid green';
wrapInp.style.padding = '10px';
let formWordSentence = document.createElement('form');
formWordSentence.id = 'formWordSentence';

let pInpSentence = document.createElement('p');
pInpSentence.innerText = 'козел , алкаш , свиня , чувак , падлюка';

let inputWordSentence = document.createElement("input");
inputWordSentence.id = 'inputWordSentence';
inputWordSentence.type = 'text';
inputWordSentence.placeholder = 'Введіть слово';

let btnWordSentence = document.createElement("button");
btnWordSentence.innerText = 'Check';

document.body.append(wrapInp);
wrapInp.appendChild(formWordSentence);
formWordSentence.append(pInpSentence,inputWordSentence,btnWordSentence);


btnWordSentence.onclick=  function (e) {
    e.preventDefault();

    if(swearWords.includes(document.forms.formWordSentence.inputWordSentence.value.trim().toLowerCase())){
        alert('Дуже не гарно від тебе почути таке! :(');
    }else {
        alert('Чемна дитина! :)');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement("hr"));
///////////////////////////////////////////////////////////////////////////////////////////////

// 4.  Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let swearWordsInSentens = ['козел','алкаш','свиня','чувак','падлюка'];

let wrapInpSentence = document.createElement('div');
wrapInpSentence.style.border = '2px solid green';
wrapInpSentence.style.padding = '10px';
let formWord = document.createElement('form');
formWord.id = 'formWord';

let pInp = document.createElement('p');
pInp.innerText = 'козел , алкаш , свиня , чувак , падлюка';

let inputWord = document.createElement("input");
inputWord.id = 'inputWord';
inputWord.type = 'text';
inputWord.placeholder = 'Введіть речення';

let btnWord = document.createElement("button");
btnWord.innerText = 'Check';

document.body.append(wrapInpSentence);
wrapInpSentence.appendChild(formWord);
formWord.append(pInp,inputWord,btnWord);

btnWord.onclick=  function (e) {
    e.preventDefault();
    let sentence = (document.forms.formWord.inputWord.value.toLowerCase()).split(' ');
    let badWords = 0;
    for (const word of swearWordsInSentens) {
        if(sentence.includes(word)){
            badWords++
            alert('Дуже не гарно від тебе почути таке! :(');
            break
        }

    }
    if (!badWords){
    alert('Чемна дитина! :)');//???????????????????????????????????????????????????????????
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement("hr"));
///////////////////////////////////////////////////////////////////////////////////////////////
