// Додайте в масив кілька елементів за допомогою методу push. Переконайтеся, що функція буде знаходити суму з урахуванням нових елементів.
let arr = [1, 2, 3];
let sym = Symbol('sum');
arr[sym] = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            sum += this[i];
        }
    }
    return sum;
}
arr.push(4, 5, 6);
let sum = arr[sym]();
console.log(sum);
