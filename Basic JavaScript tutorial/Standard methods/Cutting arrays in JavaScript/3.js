// Даний наступний масив: За допомогою методу splice зробіть з нього масив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);
