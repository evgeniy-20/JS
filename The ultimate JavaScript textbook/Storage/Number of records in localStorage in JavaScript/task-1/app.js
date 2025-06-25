// Після натискання на кнопку виведіть кількість записів у локальному сховищі.
localStorage.setItem('name', 'Yevhen');
localStorage.setItem('age', '28');

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let count = localStorage.length;
    alert(`У localStorage збережено записів: ${count}`);
});
