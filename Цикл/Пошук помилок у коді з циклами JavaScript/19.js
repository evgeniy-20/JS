// Код повинен перевірити, чи є в масиві число 3чи ні:

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
    if (elem === 3) {
        res = true;
        break;
    }
}

console.log(res);
