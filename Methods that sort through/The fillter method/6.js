// Даний масив, у ньому можуть бути звичайні елементи та підмасиви, наприклад [1, 2, [3, 4], 5, [6, 7]]. Залишіть у ньому лише звичайні елементи.

function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc = acc.concat(flattenArray(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
}

let arr = [1, 2, [3, 4], 5, [6, 7]];
let newArr = flattenArray(arr);

console.log(newArr);
