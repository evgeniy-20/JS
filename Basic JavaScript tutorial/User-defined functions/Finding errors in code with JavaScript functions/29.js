// Код повинен знайти суму елементів масиву, проте нічого не виводить у консоль:

let arr = [1, 2, 3, 4, 5];

function func(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res
}

console.log(func(arr));
