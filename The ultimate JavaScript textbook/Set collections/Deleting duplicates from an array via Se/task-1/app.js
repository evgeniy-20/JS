// Напишіть функцію, яка параметром прийматиме масив і повертатиме цей масив без дублів.

const getArray = (arr) => {
    let set = new Set(arr);
    let res = [...set];
    return res;
};

console.log(getArray([1, 2, 2, 3, 4, 4, 5]))
