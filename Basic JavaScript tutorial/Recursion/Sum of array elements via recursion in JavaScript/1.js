// Given a multidimensional object of arbitrary nesting level, for example, such as this one: Use recursion to find the sum of the elements of this object.

let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function func(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof (obj[key]) === 'object') {
            sum += func(obj[key]);
        } else {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(func(obj));
