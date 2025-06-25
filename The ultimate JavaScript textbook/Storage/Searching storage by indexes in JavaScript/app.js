// Після натискання на кнопку виведіть циклом усі записи з локального сховища.

let button = document.querySelector('#button');
localStorage.setItem('name', 'Yevhen');
localStorage.setItem('age', '28');
localStorage.setItem('city', 'Kyiv');

button.addEventListener('click', function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`${key} → ${value}`);
    }
})
