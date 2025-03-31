// Дано кнопку. Після наведення на неї виведіть одне повідомлення, а після виходу з неї - інше.

let button = document.querySelector('#button');
button.addEventListener('mouseover', function () {
    console.log('Hello world!');
})
button.addEventListener('mouseout', function () {
    console.log('Good buy');
})
