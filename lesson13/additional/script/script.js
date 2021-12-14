// - Імітуємо наповнення інтернет магазину товарами :
//      Створити форму з наступними полями :
//      - назва товару
//      - кількість товару
//      - ціна товару
//      - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити
// на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let productsForm = document.forms.productForm;

productsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let catalogProduct = [];
    if (!localStorage.getItem('catalogProduct')){
        catalogProduct.push({'Product Name': this.productName.value,
                              'Quantity product': this.productQuantity.value,
                              'Product price': this.productPrice.value,
                               'Image': this.productImage.value });
        localStorage.setItem('catalogProduct', JSON.stringify(catalogProduct));
    }else{
        let data = localStorage.getItem('catalogProduct');
        let catalogProductParse = JSON.parse(data)
        catalogProductParse.push({'Product Name': this.productName.value,
                                  'Quantity product': this.productQuantity.value,
                                  'Product price': this.productPrice.value,
                                  'Image': this.productImage.value });
        localStorage.setItem('catalogProduct', JSON.stringify(catalogProductParse));
    }
    alert('Товар доданий')
})