// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// 1. - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :


//     + отримує текст з параграфа з id "content"
let idContent = document.getElementById('content')
console.log(idContent.innerText)

//     + отримує текст з блоку з id "rules"
let idRules = document.getElementById('rules')
console.log(idRules.innerText)

//     + замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText = 'innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков.' +
    ' В качестве геттера, свойство приближается к тексту, который пользователь получит, если он выделит содержимое ' +
    'элемента курсором, затем копирует его в буфер обмена.'
console.log(idContent.innerText)

//     + замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerText = 'innerText умеет считывать стили и не возвращает содержимое скрытых элементов, тогда как textContent этого не делает.'
console.log(idRules.innerText)

//     + змініть кожному елементу колір фону на червоний
function changeColor(startElement) {
    if (startElement.children.length) {
        for (const element of startElement.children) {
            changeColor(element);
        }
    }else startElement.style.background = '#ff6392'
}
changeColor(document.body)

//     + змініть кожному елементу колір тексту на синій
function changeColorText(startElement) {
    if (startElement.children.length) {
        for (const element of startElement.children) {
            changeColorText(element);
        }
    }else startElement.style.color = '#60c1e7'
}
changeColorText(document.body)

//     + отримати весь список класів елемента з id=rules і вивести їх в console.log
let classArr = document.getElementById('rules')
console.log(classArr.className)

//     + поміняти колір тексту у всіх елементів fc_rules на червоний
let className = document.getElementsByClassName('fc_rules')
for (const classNameElement of className) {
    classNameElement.style.color = '#c91212'
}
