// Дано колекцію Set. Перетворіть її на масив двома описаними способами.

let set = new Set([1, 2, 3]);
let arr = [...set];
let ArrayForom = Array.from(set);
console.log(arr);
console.log(ArrayForom);
