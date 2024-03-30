// Даний наступний HTML код: Дано такі функції:
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);

function func1() {
    console.log(1);
}

let button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);

function func2() {
    console.log(2);
}

//Зробіть так, щоб по кліку на першу кнопку виконалася функція func1, а по кліку на другу - функція func2.
