// Дано такий код:  Отримайте номери, id та value інпутів.

let input1 = document.querySelector('#id1');
let input2 = document.querySelector('#id2');
let input3 = document.querySelector('#id3');
for (let [key, { id, value }] of elems.entries()) {
    console.log(key, id, value);
}
