// Дано кнопку. Після виходу курсору з неї виведіть якесь повідомлення.

let button = document.querySelector('#button');
button.addEventListener('mouseout', function () {
    console.log('Hello world!');
})
