function UserCard( balance = 100, transactionLimit= 100, historyLogs = [] , key= 1){
    this.balance = balance;
    this.transactionLimit = transactionLimit;
    this.historyLogs = historyLogs;
    this.key = key;
    let time = new Date().toLocaleTimeString();
    let today = new Date().toLocaleDateString("en-US");

    this.getCardOptions = function () {
        this.getOptions = {};
        this.getOptions['key'] = this.key;
        this.getOptions['balance'] = this.balance;
        this.getOptions['transactionLimit'] =  this.transactionLimit;
        this.getOptions['historyLogs'] = this.historyLogs;
        return this.getOptions;

    }
    this.putCredits = function (putMoney) {
        this.balance += putMoney;

        this.optionsPut = {};
        this.optionsPut['operationType'] = "Received credits";
        this.optionsPut['credits'] = putMoney;
        this.optionsPut['operationTime'] = `${today}, ${time}`;
        this.historyLogs.push(this.optionsPut);
    }
    this.takeCredits = function (takeMoney) {
        if ((this.balance -= takeMoney >= 0) && ( takeMoney <= this.transactionLimit)){
            this.balance -= takeMoney;

            this.optionsTake = {};
            this.optionsTake['operationType'] = "Withdrawal credits";
            this.optionsTake['credits'] = takeMoney;
            this.optionsTake['operationTime'] = `${today}, ${time}`;
            this.historyLogs.push(this.optionsTake);
        }else{
            console.error(`Перевищенний ліміт по картці 1`);
        }
    }
    this.setTransactionLimit = function (setLimit) {
        this.transactionLimit = setLimit;

        this.optionsSetLimit = {};
        this.optionsSetLimit['operationType'] = "Transaction limit change";
        this.optionsSetLimit['credits'] = setLimit;
        this.optionsSetLimit['operationTime'] = `${today}, ${time}`;
        this.historyLogs.push(this.optionsSetLimit);
    }
    this.transferCredits = function (transferMoney, transferUser) {
        this.tranferUser = transferUser;
        if ((this.balance - transferMoney* 1.05 >= 0) && ( transferMoney <= this.transactionLimit)){
            this.balance -= transferMoney * 1.05;
            this.tranferUser.putCredits(transferMoney);

            this.optionsTransf = {};
            this.optionsTransf['operationType'] = "Transfer operation";
            this.optionsTransf['credits'] = transferMoney * 1.05;
            this.optionsTransf['operationTime'] = `${today}, ${time}`;
            this.historyLogs.push(this.optionsTransf);
        }else{
            console.error(`Перевищенний ліміт по картці 2`);
        }
    }
}

class UserAccount{
    constructor(name, cards=[]) {
        this.name = name;
        this.cards = cards;
        this.countKey = 1;
    }
    addCard (){
        if (this.cards.length === 3){
            return console.error(`У вас максимальна кількість карток! Ви більше не можете добавити нову картку!`);

        }else
            this.cards.push(new UserCard(undefined,undefined, undefined, this.countKey));
            this.countKey += 1;
        }
    getCardByKey(cardKey){
        if (cardKey > 0  && cardKey <= 3){
            for (let item of this.cards) {
                if (item.key === cardKey){
                    return item;
                }
            }
        }else{
            return console.error(`Ви ввели неправильний номер картки!`);
        }
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
