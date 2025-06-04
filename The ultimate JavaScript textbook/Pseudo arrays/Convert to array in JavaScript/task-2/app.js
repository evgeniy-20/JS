// Дано абзаци: За допомогою методу slice отримайте всі абзаци, крім першого і останнього.

let elems = document.querySelectorAll('p');
let arr = Array.from(elems);
console.log(arr.slice(1, arr.length - 1));
