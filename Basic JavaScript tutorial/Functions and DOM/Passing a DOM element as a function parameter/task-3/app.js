// Зробіть функцію setValue, яка першим параметром прийматиме посилання на інпут, а другим - текст. Зробіть так, щоб ця функція встановлювала переданий текст у value інпута.

function setValue(input, text) {
    input.value = text;
}

let elem = document.getElementsByClassName('elem');
setValue(elem[0], 'Kristina');
