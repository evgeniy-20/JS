// Даний масив із числами. За допомогою циклу перевірте, чи є в ньому елемент зі значенням 5.

let arr = [1, 2, 15, 7, 17, 4];
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        found = true;
        break
    }
}

console.log(found);
