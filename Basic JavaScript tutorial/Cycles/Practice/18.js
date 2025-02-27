// Даний масив із числами. За допомогою циклу for та функції document.writeвиведіть кожний елемент масиву в окремому абзаці.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    document.write('<p>' + arr[i] + '</p>')
}
