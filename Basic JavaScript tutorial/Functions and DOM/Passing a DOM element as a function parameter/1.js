// Зробіть функцію appendText, яка першим параметром прийматиме DOM елемент, а другим - текст. Зробіть так, щоб ця функція додавала текст у кінець цього елемента.

function appendText(elem, text) {
    elem.textContent += text;
}

let elem1 = document.getElementById('elem1');
appendText(elem1, '!');
