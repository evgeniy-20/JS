// Зробіть функцію appendText, яка першим параметром прийматиме селектор, а другим - текст. Зробіть так, щоб ця функція додавала текст у кінець переданих елементів.

function appendText(selector, text) {
    let elements = document.querySelectorAll(selector);
    for (let elem of elements) {
        elem.textContent += text;
    }
}
appendText('.elem', '!');
