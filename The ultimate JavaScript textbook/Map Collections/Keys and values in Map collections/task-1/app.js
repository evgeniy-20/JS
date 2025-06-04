// Нехай дана колекція Map. Отримайте масив її ключів і переберіть їх циклом for-of.

let map = new Map([
    ['first', 1],
    ['second', 2],
    ['third', 3]
])

for (let key of map.keys()) {
    console.log(key);
}
