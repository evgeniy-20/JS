// Зробіть функцію appendText, яка першим параметром прийматиме масив DOM елементів, а другим - текст. Зробіть так, щоб ця функція додавала текст у кінець переданих елементів.

function appendText(elems, text) {
    for (let elem of elems) {
        elem.textContent = text;
    }
}

let elems = document.querySelectorAll('.elem');
appendText(elems, '!')
