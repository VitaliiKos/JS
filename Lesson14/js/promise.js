//f1
function prepareCoffee(myVariables) {
    return new Promise((resolve,reject ) =>{
        setTimeout(()=>{

            if (!myVariables.dayOff){
                if (myVariables.myTime < 380){
                    myVariables.myTime += 30;
                    myVariables.mood += 5;
                    document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60} - Випити запашної кави зранку, поки всі сплять і така тишина навколо! Що може бути краще!?`, '<br/>');
                }else {
                    myVariables.mood -= 5;
                    document.write(`${Math.floor(myVariables.myTime/60)}+ ':'+ ${myVariables.myTime%60} - Проспав :((( . На роботі попю каву з колегами`, '<br/>');
                }
                resolve(myVariables);
            }
            reject('Та ну його... Виключаю телефон і лягаю спати....Хрррр');
        },1000);
    })
}
//f2
function dressUp(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            myVariables.myTime += 10;
            if (myVariables.morning === 'дощ'){
                myVariables.mood -= 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Сьогодні ${myVariables.morning}.Це Львів "Дєтка" - привикай до дощової погоди. Не забудь парасолю`, '<br/>');
            }else {
                myVariables.mood += 10;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Сьогодні ${myVariables.morning}Погода "апупена". Можна скоротити дорогу і пройтись через парк`, '<br/>');
            }
            resolve( myVariables);
        },200);
    })
}
//f3
function waitForTrolleyBuss(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            myVariables.myTime += 20;
            if (myVariables.checkOnApp){
                myVariables.mood += 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Урра тролейбус скоро приїде`, '<br/>');
            }else {
                myVariables.myTime += 10;
                myVariables.mood += 10;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Ладно, ще трохи пройдусь, може автобус приїде швидше`, '<br/>');
            }
            resolve( myVariables);
        },1200);
    })
}
//f4
function roadCheckPoint2(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            myVariables.myTime += 15;
            if (myVariables.morning !== 'дощ'){
                myVariables.mood += 15;
                myVariables.myTime += 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Невеличка прогулянка парком перед роботою піде тільки на користь`, '<br/>');
            }else {
                if (myVariables.checkOnApp){
                    myVariables.myTime += 15;
                    myVariables.mood += 5;
                    document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Скоренько треба перебігти на інший тролейбус, дощ лиє як з відра :(`, '<br/>');
                }else{
                    myVariables.myTime += 20;
                    myVariables.mood -= 15;
                    document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Чекати транспорт під дощем,... Що ж може бути краще :(`, '<br/>');
                }
            }
            resolve( myVariables);
        },700);
    })
}
//f5
function myJob(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            myVariables.myTime += 20;
            if (myVariables.myTime < 480){
                myVariables.myTime += 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Залишилось трохи часу, можна з колегами потеривенити`, '<br/>');
            }else {
                myVariables.mood -= 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Швидко потрібно перевірити всі системи...Головне нічого не пропустити... :(`, '<br/>');
            }
            resolve( myVariables);
        },400);
    })
}
//f6
function startWorkDay(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            if (myVariables.myTime>480){
                myVariables.myTime += 10;
                myVariables.mood -= 5;
                document.write(`${Math.floor(myVariables.myTime / 60)}:${myVariables.myTime % 60}. Получити звіздюлей :(`, '<br/>');
            }else{
                myVariables.myTime = 480;
                myVariables.mood += 5;
                myVariables.myTime += 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Получити звіздюлей :)`, '<br/>');
            }
            resolve( myVariables);
        },800);
    })
}
//f7
function WorkDay(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            myVariables.myTime += 300;
            myVariables.mood += 20;
            document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Трохи попрацював...`, '<br/>');
            resolve( myVariables);
        },1500);
    })
}
//f8
function WorkTime(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            myVariables.myTime += 300;
            myVariables.mood += 20;
            document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Ще трохи попрацювати...`, '<br/>');
            resolve( myVariables);
        },1500);
    })
}
//f9
function lunch(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            if (myVariables.workContinue){
                myVariables.myTime += 60;
                myVariables.mood += 20;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Попрацював, можна і пообідати`, '<br/>');
            }else{
                myVariables.myTime += 180;
                myVariables.mood -= 25;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Гррррррр :( Поїсти навіть не дадуть (((`, '<br/>');
            }
            resolve( myVariables);
        },800);
    })
}
//f10
function endWokDay(myVariables) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            let endTime = 1440-myVariables.myTime +480;
            document.write(`${Math.floor(endTime/60)}:${endTime%60} - ще лишилось відпрацювати )`, '<br/>');
            resolve( myVariables);
        },800);
    })
}

const myVariables = {dayOff:false, myTime: 330,mood : 50, morning : 'дощ',checkOnApp : true,workContinue : false};
const setTime = myVariables.myTime;
prepareCoffee(myVariables)
    .then(time =>{
        return dressUp(time);
    })
    .then(time1 =>{
        return waitForTrolleyBuss(time1);
    })
    .then(time2 =>{
        return roadCheckPoint2(time2);
    })
    .then(time3 =>{
        return myJob(time3);
    })
    .then(time4 =>{
        return startWorkDay(time4);
    })
    .then(time5 =>{
        return WorkDay(time5);
    })

    .then(time6 =>{
        return lunch (time6);
    })

    .then(time7 =>{
        return WorkTime(time7);
    })

    .then(time8 =>{
        return endWokDay(time8);
        })
    .then(time9 =>{
       document.write('Ще один день минувся.', `Настрій ${time9.mood}/100`, '<br/>');
    })
    .catch(e=>{console.error(e)})
    .finally(()=>document.write('День за днем і місяць мине... А там вже і зарплата))) Мррр', '<br/>'));
