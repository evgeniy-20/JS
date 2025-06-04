// Отримайте псевдомасив елементів (наприклад, абзаців), перетворіть його в масив трьома описаними способами.

// Отримуємо псевдомасив абзаців
let elems = document.querySelectorAll('p');

// Спосіб перший - цикл
let arr1 = [];
for (let elem of elems) {
    arr1.push(elem)
}

// Спосіб другий - деструктарізація
let arr2 = [...elems]

// Спосіб третій - Array from

let arr3 = Array.from(elems);

console.log(arr1, arr2, arr3);
