// Отримайте всі теги li за ім'ям тега і зробіть їхній текст червоного кольору.

let elemnts = document.getElementsByTagName('li');
for (let elem of elemnts) {
    elem.style.color = 'red';
}
