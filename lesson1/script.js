
// 1.Створити змінні.Присвоїтикожномуз них значення:
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let pi = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
// _____ console.log _____
console.log(a, b, c, d, e, f, g, h, pi, j, k, l, m);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(pi);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

// _____ alert _____
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(pi);
// alert(j);
// alert(k);
// alert(l);
// alert(m);

// _____ document.write _____
document.write(a,);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(pi);
document.write(j);
document.write(k);
document.write(l);
document.write(m);

// 2. - Переприсвоїти кожній змінній з завдання значення на довільне.
 a = ++e;
 b = ++e;
 c = ++e;
 d = ++e;
 e = ++e;
 f = ++e;
 g = ++e;
 h = ++e;
 pi = ++e;
 j = ++e;
 k = ++e;
 l = ++e;
 m = ++e;
 // Вивести кожну змінну за допомогою: console.log , alert, document.write
// _____ console.log _____
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(pi);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

// _____ alert _____
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(pi);
// alert(j);
// alert(k);
// alert(l);
// alert(m);

// _____ document.write _____
document.write(a,);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(pi);
document.write(j);
document.write(k);
document.write(l);
document.write(m);

// 3. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person. (Не об'єкт)

let lastName= "Kosyk"
let firstName = "Vitalii";
let middleName = "Stepanovich";
let person =(`${firstName} ${middleName} ${lastName}`)
console.log(person);

// 4.- За допомогою 3х різних prompt() отримати 3 слова
// які являються вашими Імям, По-Батькові та роками.

// let name = prompt('Як тебе звати?', "Ivan");
// let surename = prompt('Як ти По-Батькові?', "Ivanovich");
// let age = prompt('Скільки тобі років?', 16);

//  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// alert(`Вітаю ${name}${surename}. Тобі ${age} років`);

// 5.- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 6. - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6); //-> true
console.log(5 > 6); //-> false
console.log(5 === 6); //-> false
console.log(5 >= 6); //-> false
console.log(10 === 10); //-> true
console.log(10 <= 10); //-> true
console.log(10 > 10); //-> false
console.log(10 < 10); //-> false
console.log(10 !== 10); //-> false
console.log(123 > '123'); //-> false
console.log(123 == '123'); //-> true

// 7.  Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
document.write("<br/>");
document.write("<br/>");

let str = "20";
let aa = 5;
document.write(str + aa + "<br/>");
document.write(str - aa + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");





// ERRORS
// Ваше завдання, зробити так, щоб файл відкривався без помилок .
console.log("///////////////////////////////////////////");

let aaa = 100;
let bbb = 500;
let ccc = "hello";
let ddd = "okten";
const x = 'constant value';
{
    console.log(aaa);
    const x = 'new value';

}
bbb = 'new value';

let result = 100 + "y";

console.log(result);