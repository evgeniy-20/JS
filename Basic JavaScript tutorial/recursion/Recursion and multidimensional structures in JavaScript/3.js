// Даний багатовимірний об'єкт довільного рівня вкладеності, наприклад, такий: За допомогою рекурсії виведіть усі примітивні елементи цього об'єкта в консоль.

function func(obj) {
    for (let elem in obj) {
        if (typeof obj[elem] === 'object') {
            func(obj[elem]);
        } else {
            console.log(obj[elem]);
        }
    }
}

func({ a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } });
