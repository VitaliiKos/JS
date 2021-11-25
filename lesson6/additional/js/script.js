// 1. Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
//     + данні до знака равлика(@),
//     + наявність равлика,
//     + крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//     + функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
//     someemail@gmail.com
//     someeMAIL@gmail.com
//     someeMAIL@i.ua
//     some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


document.write(`Завдання 1. Створити функцію-валідатор для адрес електронної пошти.`, '<br/>');

let validator = (email)=>{
    let validEmail = email.trim().toLowerCase();
    if (validEmail[0]=== '@' || validEmail[validEmail.length-1] === '@') {
        return `${email} - Wrong EmailAddress!`;
    }else if ( validEmail.split('@').length !== 2){
            return `${email} - Wrong EmailAddress!`;
    }else if ((email.indexOf('.') - email.indexOf('@')) < 3) {
        return `${email} - Wrong EmailAddress!`;

    }else{
        return `${email} - The Email Address is valid.`;
    }
}

let email = ['someemail@gmail.com', 'someeMAIL@gmail.com', 'someeMAIL@i.ua','some.email@gmail.com'];
for (const emailAddress of email) {
    console.log(`Завдання 1: `, validator(emailAddress));
    document.write(`Завдання 1: `, validator(emailAddress), '<br/>');
}
console.log(`**********************`);
document.write(`***********************`, '<br/>');

// 2. є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// document.write('Завдання 2. відсортувати його в спадаючому порядку за кількістю елементів в полі modules', '<br/>')
let sortCourse = coursesArray.sort((subject1, subject2) =>
    subject2.modules.length - subject1.modules.length);

console.log(`Завдання 2.`, sortCourse);
console.log('********************');

// 3. Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

document.write('Завдання 3. Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.', '<br/>');
let count = (str, stringsearch) => {
let countSymbol = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch){
            countSymbol += 1;
        }
    }
    return countSymbol;
}
let strSearch = "Астрономия это наука о небесных объектах";
let symb = "о";
document.write(`Завдання 3. Kількість символів у рядку - ${count(strSearch, symb)}`, '<br/>');
console.log(`Завдання 3. Kількість символів у рядку - ${count(strSearch, symb)}`);
console.log(`**********************`);
document.write(`***********************`, '<br/>');

// 4. Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

document.write('Завдання 4. Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів', '<br/>');
let cutString = (str, n) =>str.split(' ').splice(0, n).join(' ');

let num = 5;
let str = "Сила тяжести приложена к центру масс тела";
console.log(`Завдання 4.`, cutString(str, num));
document.write(`Завдання 4. `, cutString(str, num), '<br/>');
console.log('********************');
document.write('********************');


