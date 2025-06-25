// Після натискання на кнопку виведіть циклом ключі всіх записів із локального сховища.

localStorage.setItem('name', 'Yevhen');
localStorage.setItem('age', '28');
localStorage.setItem('city', 'Kyiv');

// Обробник натискання на кнопку
document.getElementById('.button').addEventListener('click', function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(key); // Виводимо тільки ключ
    }
});
