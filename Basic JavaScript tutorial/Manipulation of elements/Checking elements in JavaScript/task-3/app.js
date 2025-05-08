// Дано дві змінні elem1 і elem2, що містять два елементи: Перевірте, чи є елемент із elem2 нащадком елемента з elem1.


let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

let result = elem1.contains(elem2);
console.log(result);
