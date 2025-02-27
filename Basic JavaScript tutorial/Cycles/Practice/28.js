// Даний наступний масив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// Створіть із цього масиву наступний об'єкт:

// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
}

console.log(obj);
