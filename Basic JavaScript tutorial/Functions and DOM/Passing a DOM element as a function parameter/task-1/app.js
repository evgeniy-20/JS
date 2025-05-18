// Зробіть функцію appendText, яка першим параметром прийматиме DOM елемент, а другим - текст. Зробіть так, щоб ця функція додавала текст у кінець цього елемента.

function appendText(elem, text) {
    elem.textContent += text;
}

let elem1 = document.getElementsByClassName('elem1')[0];
appendText(elem1, ' I love Yevhen');

let elem2 = document.getElementsByClassName('elem2')[0];
appendText(elem2, ' I love Kristina');
