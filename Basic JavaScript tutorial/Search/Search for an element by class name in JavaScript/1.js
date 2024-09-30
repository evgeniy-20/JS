// Отримайте ці елементи за ім'ям класу і зробіть їхній текст червоного кольору.
let elems = document.getElementsByClassName('www');
for (let elm of elems) {
    elm.style.color = 'red';
}
