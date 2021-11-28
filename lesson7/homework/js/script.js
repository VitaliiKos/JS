// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let usersArr = [];
usersArr.push(new User(1, 'Misha', 'Babii', 'Babii@gmail.com', 111111111));
usersArr.push(new User(54, 'Vova', 'Babych', 'Babych@gmail.com', 222222222));
usersArr.push(new User(20, 'Ivan', 'Puzh', 'Puzh@gmail.com', 333333333));
usersArr.push(new User(5, 'Nadja', 'Vustak', 'Vustak@gmail.com', 444444444));
usersArr.push(new User(63, 'Nika', 'Bob', 'Bob@gmail.com', 555555555));
usersArr.push(new User(3, 'Mika', 'Zubach', 'Zubach@gmail.com', 666666666));
usersArr.push(new User(58, 'Valdemar', 'Hera', 'Hera@gmail.com', 777777777));
usersArr.push(new User(74, 'Kostia', 'Stanivskyj', 'Stanivskyj@gmail.com', 88888888));
usersArr.push(new User(4, 'Stepan', 'Stapunov', 'Stapunov@gmail.com', 999999999));
usersArr.push(new User(10, 'Mery', 'Khirstmas', 'Khirstmas@gmail.com', 123456789));
console.log('Завдання 1.', usersArr);
console.log('*************');

// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersArrFilter= usersArr.filter(userID => userID.id %2 === 0 );
console.log('Завдання 2.',usersArrFilter)
console.log('*************');

// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersArrSort = usersArr.sort((user1, user2) => user1.id - user2.id)
console.log('Завдання 3.',usersArrSort)
console.log('*************');

// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let usersArrClass = []
usersArrClass.push(new Client(1, 'Misha', 'Babii', 'Babii@gmail.com', 111111111,['milk' ]));
usersArrClass.push(new Client(54, 'Vova', 'Babych', 'Babych@gmail.com', 222222222,['sugar', 'apple' , 'oil', 'beef', 'potato']));
usersArrClass.push(new Client(20, 'Ivan', 'Puzh', 'Puzh@gmail.com', 333333333,['eggs', 'meat']));
usersArrClass.push(new Client(5, 'Nadja', 'Vustak', 'Vustak@gmail.com', 444444444,[ ]));
usersArrClass.push(new Client(63, 'Nika', 'Bob', 'Bob@gmail.com', 555555555,['tomato', 'water' , 'water','tea', 'lemon','beef', 'potato' ]));
usersArrClass.push(new Client(3, 'Mika', 'Zubach', 'Zubach@gmail.com', 666666666,['tea', 'lemon','beef', 'potato' ]));
usersArrClass.push(new Client(58, 'Valdemar', 'Hera', 'Hera@gmail.com', 777777777,['bread', 'spam', 'orange','carrot' , 'water' ]));
usersArrClass.push(new Client(74, 'Kostia', 'Stanivskyj', 'Stanivskyj@gmail.com', 88888888,['butter,','salt']));
usersArrClass.push(new Client(4, 'Stepan', 'Stapunov', 'Stapunov@gmail.com', 999999999,['onion', 'garlic','beef', 'potato','butter','salt']));
usersArrClass.push(new Client(10, 'Mery', 'Khirstmas', 'Khirstmas@gmail.com', 123456789,['orange','carrot' , 'water']));

console.log('Завдання 4.',usersArrClass)
console.log('*************');

// 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let usersArrClassSort = usersArrClass.sort((user1, user2) => user1.order.length - user2.order.length)
console.log('Завдання 5.',usersArrClassSort)
console.log('*************');
