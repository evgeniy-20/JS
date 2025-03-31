// Дано кнопку. Після наведення на неї виведіть якесь повідомлення.

let button = document.querySelector('#button');
button.addEventListener('mouseover', function () {
    console.log('Hello world!');
})
