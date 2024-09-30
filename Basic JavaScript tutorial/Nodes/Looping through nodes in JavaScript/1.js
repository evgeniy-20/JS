// Переберіть циклом всі вузли цього дива та виведіть їх у консоль.
let elem = document.getElementById('elem');
let childNodes = elem.childNodes;

for (let i = 0; i < childNodes.length; i++) {
    console.log('Nodes: ' + childNodes[i]);
}
