// Знайдіть усіх нащадків цього елемента і додайте їм у кінець текст '!!'.

let parent = document.querySelector('#elem');
let child = parent.children;
for (let elem of child) {
    elem.textContent += '!';
}
