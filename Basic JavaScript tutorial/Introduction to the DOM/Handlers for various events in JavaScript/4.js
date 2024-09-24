// Дано кнопку. Після наведення на неї виведіть одне повідомлення, а після виходу з неї - інше.

let button4 = document.querySelector('#button4');
button4.addEventListener('mouseover', function () {
    console.log('massage!!!');
});

button4.addEventListener('mouseout', function () {
    console.log('Goodbye!!!');
});
