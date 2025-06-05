// Дано два символи: Отримайте їхні імена.

let sym1 = Symbol.for('test1');
let sym2 = Symbol.for('test2');

let key1 = Symbol.keyFor(sym1);
let key2 = Symbol.keyFor(sym2);
console.log(key1);
console.log(key2);
