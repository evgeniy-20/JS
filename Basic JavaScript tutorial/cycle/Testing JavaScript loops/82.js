// Даний масив із числами. За допомогою циклу перевірте, чи є в ньому елемент зі значенням 5.

let arr = [1, 2, 3, 4, 14, 15, 16, 65, 75, 35, 45, 25, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        console.log("+++");
    }
}