// 1. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
//         -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//         -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//         -- changeYear (newValue) - змінює рік випуску на значення newValue
//         -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('Завдання 1.')
function Car(model, manufacturer, year, maxspeed, motor) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.motor = motor;

    this.drive = function (){
       return (`їдемо зі швидкістю ${maxspeed} км/год на годину`)
    }
    this.info = function (){
        return (` model - ${this.model}; \n manufacturer - ${this.manufacturer}; \n year - ${this.year}р; \n maxspeed - ${this.maxspeed} км/год; \n motor - ${this.motor}л.`)
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxspeed += newSpeed;
    }
    this.changeYear = function (newValue){
       this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver
        }
}
let driver = {
    driverName : 'Petro',
    driverSurename : 'Petrov',
    driverAge : 35
    }
let car = new Car('X3', 'BMW', 2020, 220, 3.0)
console.log(car)
car.drive()
car.info()
car.addDriver(driver)
car.increaseMaxSpeed(100)
car.changeYear(2015)
console.log(car.info())

// 2. (Те саме, тільки через клас)
//     Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
//         -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//         -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//         -- changeYear (newValue) - змінює рік випуску на значення newValue
//         -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(`Завдання 2. `)
class Cars{
    constructor(manufacturer, motor, model, year, maxspeed) {
        this.manufacturer = manufacturer;
        this.motor = motor;
        this.model = model;
        this.year = year;
        this.maxspeed = maxspeed;
    }
    drive (){
        return (`їдемо зі швидкістю ${this.maxspeed} км/год на годину`)
    }
    info (){
        return (`model - ${this.model}; \n manufacturer - ${this.manufacturer}; \n year - ${this.year}р; \n maxspeed - ${this.maxspeed} км/год; \n motor - ${this.motor}л.`)
    }
    increaseMaxSpeed (newSpeed){
        this.maxspeed += newSpeed;
    }
    changeYear (newValue){
        this.year = newValue;
    }
    addDriver (driver){
        this.driver = driver
    }
}

driver = {
    driverName : 'Ivan',
    driverSurename : 'Ivanov',
    driverAge : 16
}
car = new Cars('AUDI', 2.5, 'А6', 2012, 260)
console.log(car)
car.drive()
car.info()
car.addDriver(driver)
car.increaseMaxSpeed(50)
car.changeYear(2014)
console.log(car)


// 3.  Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(girlName, girlAge, size) {
        this.girlName = girlName;
        this.girlAge = girlAge;
        this.size = size;
    }
}
let girlsParametr = [];
let girls = ['Mery', 'Elizabet', 'Selin', 'Annie', 'Bridget', 'Allina','Anna', 'Lorry', 'Scarlet', 'Tina']
for (const girl of girls) {
    girlsParametr.push(new Cinderella(girl, Math.floor(Math.random() * (35 - 18)) + 18, Math.floor(Math.random() * (46 - 32)) + 32 ))
}
console.log(girlsParametr)
console.log(girlsParametr.length)

class Prince {
    constructor(princeName, princeAge, shoeSize) {
        this.princeName = princeName;
        this.princeAge = princeAge;
        this.shoeSize = shoeSize;
    }
}
let prince = new Prince('Святослав',  Math.floor(Math.random() * (45 - 23)) + 23,  Math.floor(Math.random() * (46 - 32)) + 32)
let i = 0
for (const girl of girlsParametr) {
    console.log(i)
    i++
    // console.log(`${prince.princeName}, ${prince.princeAge}р.,  шукає дівчину з ${girl.size} розміром ноги`)
    if (girl.size === prince.shoeSize){
        console.log(`Вітаємо. Принц знайшов свою принцесу. Її звати ${girl.girlName}, їй ${girl.girlAge}, її розмір ноги ${girl.size}`)
        break
    }
    else{
        console.log(`Вибачте ${prince.princeName}, але ${girl.girlName} не ваша принцеса. Її розміром ноги ${prince.shoeSize}. `)
    }
}

let princess = girlsParametr.find((girl) => girl.size === prince.shoeSize)
console.log(princess)