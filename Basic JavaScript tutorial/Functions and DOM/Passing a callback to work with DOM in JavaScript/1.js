// Дано абзаци. За допомогою створеної нами функції forEach для кожного абзацу додайте в кінець його тексту знак оклику.

forEach('.elem', function (elem) {
    elem.textContent += '!';
})

function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);
    for (let elem of elems) {
        func(elem);
    }
}
