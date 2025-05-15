// Дано масив. Виведіть його елементи у вигляді списку ul.
let arr = ['Stas', 'Alina', 'Yura', 'Katya', 'Yevhen', 'Kristina'];
let list = document.querySelector('.elem');

for (let elem of arr) {
    let li = document.createElement('Li');
    li.innerHTML = elem;
    list.appendChild(li);
}
