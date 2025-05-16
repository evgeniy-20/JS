// Виведи масив з іменами у вигляді списку <ul> на сторінку.
const names = ['Євген', 'Анна', 'Олег', 'Марія'];
let list = document.querySelector('.list');
for (let elem of names) {
    let li = document.createElement('li');
    li.textContent = elem;
    list.appendChild(li);
}
