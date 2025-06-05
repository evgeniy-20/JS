// Дано масив: Описаним в уроці способом додайте в масив функцію, що повертатиме суму елементів масиву.

let arr = [1, 2, 3];
let sym = Symbol('sum');
arr[sym] = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}
let sum = arr[sym]();
console.log(sum);
