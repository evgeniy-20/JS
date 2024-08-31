// Даний наступний масив: За допомогою методу spliceперетворіть масив на наступний: [1, 4, 5]
// перший варіант
let arr = [1, 2, 3, 4, 5]
let arr1 = arr.splice(-2, 2);
let arr2 = arr.splice(0, 1);
let result = arr2.concat(arr1);
console.log(result);

// другий варіант

arr.splice(1, 2);

console.log(arr);
