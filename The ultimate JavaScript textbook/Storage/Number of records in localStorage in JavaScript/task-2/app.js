// Після натискання на кнопку дізнайтеся кількість записів у локальному сховищі і, якщо їх більше 10, очистіть сховище.
localStorage.setItem('name', 'Yevhen');
localStorage.setItem('age', '28');

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let count = localStorage.length;

    if (count > 10) {
        localStorage.clear();
        alert(`Було ${count} записів. Сховище очищено!`);
    } else {
        alert(`У localStorage збережено записів: ${count}`);
    }
});
