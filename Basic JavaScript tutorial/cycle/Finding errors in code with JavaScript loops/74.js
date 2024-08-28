// Код повинен вивести лише парні елементи з масиву:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}
