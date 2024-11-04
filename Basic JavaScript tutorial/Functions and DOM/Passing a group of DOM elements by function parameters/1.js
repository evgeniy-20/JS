// Зробіть функцію appendText, яка першим параметром прийматиме масив DOM елементів, а другим - текст. Зробіть так, щоб ця функція додавала текст у кінець переданих елементів.

function appendText(arrs, text) {
    for (let elem of arrs) {
        elem.textContent += text;
    }
}

let arrs = document.querySelectorAll('.elem');
appendText(arrs, 'text');
