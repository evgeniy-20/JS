// Використовуйте цикл для пошуку найбільшого числа в масиві [34, 2, 19, 45, 100].

let arr = [34, 2, 19, 45, 100];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);
