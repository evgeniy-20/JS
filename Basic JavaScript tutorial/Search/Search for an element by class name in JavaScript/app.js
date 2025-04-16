// Отримайте ці елементи за ім'ям класу і зробіть їхній текст червоного кольору.

let elements = document.getElementsByClassName('www');
for (let elem of elements) {
    elem.style.color = 'red';
}
