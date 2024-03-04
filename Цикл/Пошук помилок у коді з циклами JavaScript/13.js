// Код має звести в квадрат кожен елемент масиву:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
}

console.log(arr);
