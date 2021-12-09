// 1. створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let userForm = document.forms.user;

userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('Name',this.userName.value);
    localStorage.setItem('Age',this.userAge.value);
});

// 2. створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let car = document.createElement("div");
car.classList.add('carOption');
car.style.margin ='10px';

let carForm = document.createElement("form");
carForm.id = 'carForm';

let carModel = document.createElement("input");
carModel.id = 'Model';
carModel.placeholder = 'Model...';
carModel.style.margin ='10px';
carModel.style.padding ='10px';

let carType = document.createElement("input");
carType.id = 'Type';
carType.placeholder = 'Type...';
carType.style.margin ='10px';
carType.style.padding ='10px';

let carVolume = document.createElement("input");
carVolume.id = 'Volume';
carVolume.placeholder = 'Volume';
carVolume.style.margin ='10px';
carVolume.style.padding ='10px';

let carSubmit = document.createElement("button");
carSubmit.innerText= 'Save';
carSubmit.style.padding ='10px 15px';
carSubmit.style.background = 'yellowgreen';
carSubmit.style.borderRadius = '5px';

document.body.appendChild(car);
car.appendChild(carForm);
carForm.append(carModel, carType, carVolume, carSubmit);

carForm.addEventListener('submit', function f(event) {
    event.preventDefault();
    let machine = [];
    if (!localStorage.getItem('machine')){
        machine.push({'Model': this.Model.value,'Type': this.Type.value, 'Volume': this.Volume.value});
        localStorage.setItem('machine', JSON.stringify(machine));
    }else{
        let data = localStorage.getItem('machine');
        let machineParse = JSON.parse(data);
        machineParse.push({'Model': this.Model.value,'Type': this.Type.value, 'Volume': this.Volume.value});
        localStorage.setItem('machine', JSON.stringify(machineParse));
    }
});