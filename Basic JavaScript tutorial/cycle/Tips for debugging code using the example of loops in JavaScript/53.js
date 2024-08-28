//
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;

for (let key in obj) {
    if (obj[key] === 10 || obj[key] === 20) {
        sum += obj[key];
    }
}

console.log(sum);
