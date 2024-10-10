"use strict"

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    console.log(square(this.value));
}

function square(value) {
    return Math.pow(value, 2);
}
