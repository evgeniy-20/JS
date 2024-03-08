// Зробіть функцію, яка повертатиме випадковий елемент із масиву.
function getRandomElem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

console.log(getRandomElem([1, 2, 3, 4, 5, 6]));
