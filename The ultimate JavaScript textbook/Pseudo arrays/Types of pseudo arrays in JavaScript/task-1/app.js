// Перевірте, який тип колекції буде в властивості childNodes.

let parent = document.body; // або будь-який інший елемент
console.log(parent.childNodes); // NodeList
console.log(Object.prototype.toString.call(parent.childNodes)); // [object NodeList]
