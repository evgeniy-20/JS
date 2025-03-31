// Дано такі функції: Зробіть так, щоб за кліком на першу кнопку виконалася функція func1, а за кліком на другу - функція func2.
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
function func1() {
    console.log(1);
}

function func2() {
    console.log(2);
}
