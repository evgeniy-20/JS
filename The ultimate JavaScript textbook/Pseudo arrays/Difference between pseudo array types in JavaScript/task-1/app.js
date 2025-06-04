// Перевірте, як поводиться властивість children при додаванні нового елемента.
let parent = document.querySelector('div');
console.log('До додавання:', parent.children.length);

let newElem = document.createElement('p');
parent.append(newElem);

console.log('Після додавання:', parent.children.length)
