// Дано два інпути. Зробіть так, щоб після введення двох символів фокус введення переходив до другого інпуту, а після введення двох символів у цей інпут - фокус з нього забирався.

input1.addEventListener('input', function () {
    if (input1.value.length === 2) {
        input2.focus();
    }
});

input2.addEventListener('input', function () {
    if (input2.value.length === 2) {
        input2.blur();
    }
});
