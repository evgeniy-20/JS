// Отримайте ітератор колекції NodeList. Послідовно викликайте його, поки елементи колекції не закінчаться.
let nodeList = document.querySelectorAll('p');

const iter = nodeList[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
