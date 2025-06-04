// Перевірте, як поводиться властивість childNodes при додаванні нового елемента.

let parent = document.querySelector('div');
console.log('До додавання:', parent.childNodes.length);

let newElem = document.createElement('p');
parent.append(newElem);

console.log('Після додавання:', parent.childNodes.length);
