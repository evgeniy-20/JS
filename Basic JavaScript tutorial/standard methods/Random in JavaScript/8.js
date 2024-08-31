// За допомогою циклу заповніть масив 10-ю випадковими цілими числами.

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.log(arr);
