// Перевірте, який тип колекції буде в властивості children.
let parent = document.body; // або будь-який інший елемент
console.log(parent.children); // HTMLCollection
console.log(Object.prototype.toString.call(parent.children)); // [object HTMLCollection]
