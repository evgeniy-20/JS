// Переберіть у циклі його класи.

let elem = document.querySelector('#elem');
let classes = elem.classList;
for (let className of classes) {
    console.log(className);
}
