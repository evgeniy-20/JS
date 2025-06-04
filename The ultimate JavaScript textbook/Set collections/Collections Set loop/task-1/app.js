// Створіть колекцію Set з якими-небудь числами. Переберіть цю колекцію циклом і знайдіть суму її елементів.

let set = new Set([1, 2, 3]);
let sum = 0;
for (let elem of set) {
    sum += elem;
}

console.log(sum);
