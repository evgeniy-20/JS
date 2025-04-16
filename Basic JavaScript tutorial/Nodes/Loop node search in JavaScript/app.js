// Переберіть циклом усі вузли цього дива і виведіть їх у консоль.

let elems = document.querySelector('#elem');
for (let elem of elems.childNodes) {
    console.log(elem);
}
