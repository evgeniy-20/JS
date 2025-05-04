// Нехай тепер в одній і в другій функції ми будемо виводити value інпута. Визначте, що виведеться в рядках коду, позначених коментарями:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    console.log(this.value); // виведе значення інпута

    function child() {
        console.log(this.value); // undefined
    }
    child();
}
