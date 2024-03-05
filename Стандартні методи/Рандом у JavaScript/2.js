// За допомогою циклу заповніть масив-ю 10 випадковими цілими числами.

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}

console.log(arr);
