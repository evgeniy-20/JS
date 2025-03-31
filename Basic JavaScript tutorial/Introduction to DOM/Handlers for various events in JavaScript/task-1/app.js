// Дано кнопку. По подвійному кліку по ній виведіть якесь повідомлення.

let button = document.querySelector('#button');
button.addEventListener('dblclick', function () {
    console.log('Double click detected!');
})
