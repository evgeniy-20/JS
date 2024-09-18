// Даний масив із числами. Залишіть у ньому лише негативні числа.

let arr = [-1, 2, -3, 4, -5];

let result = arr.filter(elem => {
    if (elem < 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result);
