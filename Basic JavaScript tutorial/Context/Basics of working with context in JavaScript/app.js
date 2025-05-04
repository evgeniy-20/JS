// Створи об'єкт car з властивістю brand і методом showBrand, який виводить this.brand.

let car = {
    brand: 'Mercedes',
    showBrand: function () {
        console.log(this.brand);
    }
}

car.showBrand();