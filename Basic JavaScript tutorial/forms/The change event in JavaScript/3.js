// Дано інпут. За його зміною перевірте, кількість символів у ньому менша за 5-ть чи ні. Якщо менше - пофарбуйте кордон інпуту в зелений колір, а якщо більше - у червоний.

let elem = document.querySelector('#elem');
elem.addEventListener('change', function () {
    if (elem.value.length < 5) {
        elem.style.border = '1px solid green';
    } else {
        elem.style.border = '1px solid red';
    }
})
