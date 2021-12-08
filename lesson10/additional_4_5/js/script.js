
// 5.  Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// этот код помечает картинки цифрами, для удобства разработки
// его можно убрать, если не нужен
let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    let span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = `${i +1}`;
    lis[i].appendChild(span);
}

let width = 960;
let count = 1;

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function(){
    if(position >= 0) return;

    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    if(position <= -width * (listElems.length - count)) return;

    position = Math.max(position - width * count, - width * listElems.length - count);
    list.style.marginLeft = position + 'px';
};


// 4. *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает
//         в боди 2 кнопки (назад/вперед) при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии
//         на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)  НО если у
//         (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
//         выводит первого ребенка. и тд. Когда все дети заканчиваются, мы выходим из данного дочернего элемента
//         и переходим к следующему, лежащему с ним на одном уровне
let btnNext = document.createElement("button");
btnNext.id = 'btnNext'
btnNext.innerText = 'Next>>';

let btnPrev = document.createElement("button");
btnPrev.id = 'btnPrev'
btnPrev.innerText = '<<Prev';

document.body.append(btnPrev, btnNext);
let stepCount = 0;

btnPrev.onmousedown = function () {
    stepCount - 1 >= 0?stepCount--:console.log('Ви в корені DOM-дерева.');
    console.log(elements[stepCount]);
}
btnNext.onmousedown = function () {
    stepCount + 1 < elements.length?stepCount++:console.log('Ви пройшли все DOM-дерево.');
    console.log(elements[stepCount]);
}
let elements = [];
function enumChildNodes(node) {
    elements.push(`Tag name: ${node.localName}, parent:${node.parentNode.nodeName}`);
    if (node && 1 === node.nodeType) {
        let child = node.firstChild;
        while (child) {
            if (1 === child.nodeType) {
                enumChildNodes(child);
            }
            child = child.nextSibling;
        }
    }
}
let currentElement =document.body;
enumChildNodes(currentElement);
