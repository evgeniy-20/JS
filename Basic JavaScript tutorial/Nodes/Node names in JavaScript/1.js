// Переберіть циклом всі вузли цього дива і виведіть у консоль їхньої назви.

let elem = document.getElementById('elem');

let childNodes = elem.childNodes;

for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];
    console.log(node.nodeName);
}
