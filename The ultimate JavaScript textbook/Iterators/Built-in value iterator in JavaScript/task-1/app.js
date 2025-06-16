// Перевірте роботу цього ітератора на масиві.
let map = new Map();
map.set('name', 'Kristina');
map.set('age', 25);
map.set('city', 'Chernivtsi');
let iterator = map.values();
for (let value of iterator) {
    console.log(value);
}
