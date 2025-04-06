// Дано таку функцію: Дано також інпути. Зробіть так, щоб після втрати фокусу в будь-якому з наших інпутів виконувалася наведена вище функція.
let inputs = document.querySelectorAll('input');

function func() {
    this.value = Number(this.value) + 1;
}

for (let elem of inputs) {
    elem.addEventListener('blur', func);
}
