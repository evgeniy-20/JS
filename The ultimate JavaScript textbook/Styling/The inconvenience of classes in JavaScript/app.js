// Дано інпут. Після втрати фокусу перевірте, що в нього введено не більше 9-ти символів. Якщо це так, пофарбуйте межу інпуту в зелений колір, а якщо не так - у червоний.

const inputElement = document.querySelector('.input-symbol');

inputElement.addEventListener('blur', function () {
    if (inputElement.value.length <= 9) {
        inputElement.style.border = '2px solid green';
    } else {
        inputElement.style.border = '2px solid red';
    }
});
