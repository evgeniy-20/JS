// Дана наступна функція: Дано також інпути. Зробіть так, щоб у разі втрати фокусу в будь-якому з наших інпутів виконувалася наведена вище функція.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);
function func() {
    this.value = Number(this.value) + 1;
}
