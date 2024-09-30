// Даний елемент #elem: Знайдіть всіх нащадків цього елемента та додайте їм у кінець текст '!'.
let elem = document.querySelector('#elem');
let children = elem.children;
for (let i = 0; i < children.length; i++) {
    children[i].textContent += '!';
}
