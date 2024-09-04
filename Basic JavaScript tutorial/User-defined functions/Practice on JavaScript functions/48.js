// Зробіть функцію, яка повертатиме випадковий елемент із масиву.

function randomElemArray(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

console.log(randomElemArray([1, 2, 3, 4, 5]));
