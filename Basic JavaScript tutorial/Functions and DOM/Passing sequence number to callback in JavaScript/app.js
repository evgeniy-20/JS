// Дано абзаци. За допомогою створеної нами функції forEach для кожного абзацу додайте йому на початок його порядковий номер.

function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);
    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i);
    }
}

forEach('.elem', function (elem, index) {
    elem.textContent = index + elem.textContent;
})
