// Дано дві змінні elem1 і elem2, що містять два елементи: Перевірте, чи є елемент із elem2нащадком елемента elem1.

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

let isDescendant = elem1.contains(elem2);
console.log(isDescendant)
