// Зробіть колекцію Map. Перевірте, чи має вона ключ Symbol.iterator.

let map = new Map();
map.set('key1', 'key2');
map.set(Symbol('sym1'), 'value1');
map.set(Symbol('sym2'), 'value2');

// Перевіряємо наявність ітератора
console.log(typeof map[Symbol.iterator]);
