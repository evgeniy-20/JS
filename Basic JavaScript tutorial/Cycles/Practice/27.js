// Даний наступний масив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// Створіть із цього масиву наступний об'єкт:

// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};


let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    obj[i + 1] = arr[i];
}

console.log(obj);
