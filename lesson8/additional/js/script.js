// 1. написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let arrClass = []
function searchClass(startElement) {
    if (startElement.children.length) {
        for (const element of startElement.children) {
            searchClass(element);
        }
    }
    if(startElement.className) {
        for (const classElement of startElement.className.split(' ')) {
            if (!arrClass.includes(classElement)) {
                arrClass.push(classElement)
            }
        }
    }

}
searchClass(document.body)
console.log(arrClass)
