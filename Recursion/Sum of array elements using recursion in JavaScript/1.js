// Даний багатовимірний об'єкт довільного рівня вкладеності, наприклад, такий: {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}} За допомогою рекурсії знайдіть суму елементів цього об'єкта.

function sumObject(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        } else if (typeof obj[key] === 'object') {
            sum += sumObject(obj[key]);
        }
    }

    return sum;
}

const obj = {
    a: 1,
    b: { c: 2, d: 3, e: 4 },
    f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } }
};

const totalSum = sumObject(obj);
console.log(totalSum); // Виведе 45
