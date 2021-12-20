//f1
function prepareCoffee(myVariables, callback) {
        setTimeout(()=>{
            if (!myVariables.dayOff){
                if (myVariables.myTime < 380){
                    myVariables.myTime += 30;
                    myVariables.mood += 5;
                    document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60} - Випити запашної кави зранку, поки всі сплять і така тишина навколо! Що може бути краще!?`, '<br/>');
                }else {
                    myVariables.mood -= 5;
                    document.write(`${Math.floor(myVariables.myTime/60)}: ${myVariables.myTime%60} - Проспав :((( . На роботі попю каву з колегами`, '<br/>');
                }
                callback(null, myVariables);
            }else {
                callback('Та ну його...Сьогодні вихідний...  Виключаю телефон і лягаю спати....Хрррр', null);
            }
        },1000);
}
//f2
function dressUp(myVariables, callback) {
        setTimeout(()=>{
            myVariables.myTime += 10;
            if (myVariables.morning === 'дощ'){
                myVariables.mood -= 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Сьогодні ${myVariables.morning}.Це Львів "Дєтка" - привикай до дощової погоди. Не забудь парасолю`, '<br/>');
            }else {
                myVariables.mood += 10;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Сьогодні ${myVariables.morning}. Погода "апупена". Можна скоротити дорогу і пройтись через парк`, '<br/>');
            }
            callback(null, myVariables);
        },200);
}
//f3
function waitForTrolleyBuss(myVariables, callback) {
        setTimeout(()=>{
            myVariables.myTime += 20;
            if (myVariables.checkOnApp){
                myVariables.mood += 15;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Урра тролейбус скоро приїде`, '<br/>');
            }else {
                myVariables.myTime += 10;
                myVariables.mood += 10;
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Тролейбус ще далеко... піду на іншу зупинку, може автобус приїде швидше`, '<br/>');
            }
            callback(null, myVariables);
        },1200);
}
//f4
function roadCheckPoint2(myVariables, callback) {
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
            callback(null, myVariables);
        },700);
}
//f5
function myJob(myVariables, callback) {
        setTimeout(()=>{
            myVariables.myTime += 20;
            if (myVariables.myTime < 480){
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Залишилось трохи часу, можна з колегами потеривенити`, '<br/>');
                myVariables.myTime += 15;
            }else {
                document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Швидко потрібно перевірити всі системи...Головне нічого не пропустити... :(`, '<br/>');
                myVariables.mood -= 15;
            }
            callback(null, myVariables);
        },400);
}
//f6
function startWorkDay(myVariables, callback) {
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
            callback(null, myVariables);
        },800);
}
//f7
function WorkDay(myVariables, callback) {
        setTimeout(()=>{
            myVariables.myTime += 300;
            myVariables.mood += 20;
            document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Трохи попрацював...`, '<br/>');
            callback(null, myVariables);
        },1500);
}
//f8
function WorkTime(myVariables, callback) {
        setTimeout(()=>{
            myVariables.myTime += 300;
            myVariables.mood += 20;
            document.write(`${Math.floor(myVariables.myTime/60)}:${myVariables.myTime%60}. Ще трохи попрацювати...`, '<br/>');
            callback(null, myVariables);
        },1500);
}
//f9
function lunch(myVariables, callback) {
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
            callback(null, myVariables);
        },800);
}
//f10
function endWokDay(myVariables, callback) {
        setTimeout(()=>{
            let endTime = 1440-myVariables.myTime +480;
            document.write(`${Math.floor(endTime/60)}:${endTime%60} - ще лишилось відпрацювати )`, '<br/>');
            callback(null, myVariables);
        },800);
}
const myVariables = {dayOff:[true,false][Math.floor(Math.random() * 2)], myTime: Math.floor(Math.random() * (400 - 320)) + 320,mood : 50, morning : ['дощ', 'сонце', 'туман'][Math.floor(Math.random() * 3)],checkOnApp : [true,false][Math.floor(Math.random() * 2)],workContinue : [true,false][Math.floor(Math.random() * 2)]};
prepareCoffee(myVariables, (err1, res1)=>{
    if (err1){
        return document.write(err1);
    }else {
        dressUp(res1, (err2, res2)=>{
            waitForTrolleyBuss(res2, (err3,res3)=>{
                roadCheckPoint2(res3, (err4,res4)=>{
                    myJob(res4, (err5,res5)=>{
                        startWorkDay(res5, (err6,res6)=>{
                            WorkDay(res6, (err7,res7)=>{
                                lunch(res7, (err8,res8)=>{
                                    WorkTime(res8, (err9,res9)=>{
                                        endWokDay(res9, (err10,res10)=>{
                                            document.write('День за днем і місяць мине... А там вже і зарплата))) Мррр', '<br/>')
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
});