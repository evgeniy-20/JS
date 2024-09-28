// По кліку на абзац його значення має збільшитись на одиницю:
let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', function () {
        this.textContent = Number(this.textContent) + 1;
    });
}
