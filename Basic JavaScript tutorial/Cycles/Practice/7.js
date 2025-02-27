// Даний масив із числами. За допомогою циклу перевірте, чи є в ньому елемент зі значенням 5.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 24, 45, 65, 56];
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        console.log('Yes');
        found = true;
        break
    }
}

if (!found) {
    console.log('No');
}
