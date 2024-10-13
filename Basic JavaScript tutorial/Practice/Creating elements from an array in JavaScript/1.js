// Модифікуйте мій код так, щоб за кліком на абзац до його вмісту додавалася одиниця.

let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let p = document.createElement('p');
    p.textContent = elem;
    p.addEventListener('click', function () {
        this.textContent = Number(this.textContent) + 1;
    })
    parent.appendChild(p);
}
