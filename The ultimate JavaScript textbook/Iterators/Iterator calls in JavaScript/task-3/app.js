// Отримайте ітератор колекції HTMLCollection. Послідовно викликайте його, поки елементи колекції не закінчаться.
let htmlCollection = document.getElementsByTagName('p');

const iter = htmlCollection[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
