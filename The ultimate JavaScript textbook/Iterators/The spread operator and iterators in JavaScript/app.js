// Розкладіть спредом такий об'єкт:

let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    }
};

let arr = [...obj];
console.log(arr);
