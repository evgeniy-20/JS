// Після натискання на кнопку виведіть циклом значення всіх записів із локального сховища.
// Тестові записи (для демонстрації)
localStorage.setItem('name', 'Yevhen');
localStorage.setItem('age', '28');
localStorage.setItem('city', 'Kyiv');
document.querySelector('button').addEventListener('click', function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);            // отримуємо ключ
        let value = localStorage.getItem(key);    // отримуємо значення за ключем
        console.log(value);                       // виводимо значення
    }
});
