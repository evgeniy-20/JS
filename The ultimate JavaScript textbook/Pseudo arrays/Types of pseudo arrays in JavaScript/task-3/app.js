// Перевірте, який тип колекції буде отримано через метод getElementsByClassName.

let elems = document.getElementsByClassName('some-class');
console.log(elems); // HTMLCollection
console.log(Object.prototype.toString.call(elems)); // [object HTMLCollection]
