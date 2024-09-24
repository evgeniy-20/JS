// Дано кнопку. По подвійному кліку по ній виведіть якесь повідомлення.

let button1 = document.querySelector('#button1');
button1.addEventListener('dblclick', function () {
    console.log('massage!!!');
})
