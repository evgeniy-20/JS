// Дано два інпути. Зробіть так, щоб після введення двох символів фокус введення переходив до другого інпуту, а після введення двох символів у цей інпут - фокус із нього забирався.
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

// Коли в першому інпуті введено 2 символи — переходимо до другого
input1.addEventListener('input', function () {
    if (this.value.length === 2) {
        input2.focus();
    }
});

// Коли в другому інпуті введено 2 символи — забираємо фокус
input2.addEventListener('input', function () {
    if (this.value.length === 2) {
        this.blur(); // знімає фокус
    }
});
