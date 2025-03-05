// Зробіть функцію, яка повертатиме випадковий елемент із масиву.

function randomArray(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let arr = [1, 2, 3, 4, 5];
console.log(randomArray(arr));
