// Викличте створену функцію і переконайтеся, що вона правильно знаходить суму.

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
let sum = arr[sym]();
console.log(sum);
