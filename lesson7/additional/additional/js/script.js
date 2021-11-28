// 1. Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//  Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                  lat: '-37.3159',
//                  lng: '81.1496'
//                  }
//             },
//          phone: '1-770-736-8031 x56442',
//          website: 'hildegard.org',
//          company: {
//              name: 'Romaguera-Crona',
//              catchPhrase: 'Multi-layered client-server neural-net',
//              bs: 'harness real-time e-markets'
//              }
// }

class User{
    constructor(id, name, username, email, address, phone,website,company ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
        this.company = company;
    }
}

class Address{
    constructor(street, suite, city, zipcode,geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo{
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company{
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let id = 1;
let name = 'Leanne Graham';
let username = 'Bret'
let email = 'Sincere@april.biz'
let street = 'Kulas Light'
let suite = 'Apt. 556'
let city = 'Gwenborough'
let zipcode = '92998-3874'
let lat = '-37.3159'
let lng = '81.1496'
let phone = '1-770-736-8031 x56442'
let website = 'hildegard.org'
let companyName = 'Romaguera-Crona'
let catchPhrase = 'Multi-layered client-server neural-net'
let bs = 'harness real-time e-markets'

let geolocation = new Geo(lat, lng)
let userAddress = new Address(street, suite, city, zipcode, geolocation)
let userCompany = new Company(companyName,catchPhrase, bs)
let newUser = new User(id, name, username, email, userAddress, phone, website, userCompany)
console.log(newUser)


// 2.  Створити функцію конструктор / клас  який описує об'єкт тегу
//      Поля :
//          -назва тегу ()
//          - опис його дій
//          - масив з атрибутами (2-3 атрибути максимум)
//      Кожен атрибут описати як окремий який буде містити
//          -назву атрибуту
//          -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
//      Таким чином описати теги
//          -a
//          -div
//          -h1
//          -span
//          -input
//          -form
//          -option
//          -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

class HtmlTag{
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [attrs];
    }

}

class AttributeTag {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}
let attrHref = new AttributeTag('href', 'Задает адрес документа, на который следует перейти.')
let attrTitle = new AttributeTag('tittle', 'Добавляет всплывающую подсказку к содержимому.')
let attrAlign = new AttributeTag('align', 'Определяет выравнивание заголовка.')
let attrHidden = new AttributeTag('hidden', 'Скрывает содержимое элемента от просмотра.')
let attrPlaceholder = new AttributeTag('placeholder', 'Выводит подсказывающий текст.')
let attrEnctype = new AttributeTag('enctype', 'Способ кодирования данных формы.')
let attrLabel = new AttributeTag('label', 'Указание метки пункта списка.')
let attrSize = new AttributeTag('label', 'Указание метки пункта списка.')



let tagA = new HtmlTag('a', 'предназначен для создания ссылок.', attrHref)
let tagDiv = new HtmlTag('div', 'предназначен для выделения фрагмента документа', attrTitle)
let tagH1 = new HtmlTag('h1', 'представляет собой наиболее важный заголовок первого уровня', attrAlign)
let tagSpan = new HtmlTag( 'span', 'предназначен для определения строчных элементов документа', attrHidden)
let tagInput = new HtmlTag('input', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', attrPlaceholder)
let tagForm = new HtmlTag('form', 'устанавливает форму на веб-странице',attrEnctype)
let tagOption = new HtmlTag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера `<select>`',attrLabel)
let tagSelect = new HtmlTag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка',attrSize )
console.log(tagA)
console.log(tagDiv)
console.log(tagH1)
console.log(tagSpan)
console.log(tagInput)
console.log(tagForm)
console.log(tagOption)
console.log(tagSelect)