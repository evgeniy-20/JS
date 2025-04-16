// Дано інпут. За його зміною перевірте, кількість символів у ньому менша за 5-ть чи ні. Якщо менше - пофарбуйте кордон інпуту в зелений колір, а якщо більше - у червоний.

let input = document.querySelector('#input');

input.addEventListener('input', function () {
    if (this.value.length < 5) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
});
