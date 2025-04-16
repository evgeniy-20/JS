// Переберіть циклом усі вузли цього діва і виведіть у консоль їхні назви.

let elems = document.querySelectorAll('#elem');
for (let elem of elems) {
    console.log(elem.nodeName);
}
