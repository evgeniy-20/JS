// Отримайте всі теги li за ім'ям тега і зробіть їхній текст червоного кольору.

let elems = document.getElementsByTagName('li');
for (let elem of elems) {
    elem.style.color = 'red';
}
