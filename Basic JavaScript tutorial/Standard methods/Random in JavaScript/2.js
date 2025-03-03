// За допомогою циклу заповніть масив-ю 10 випадковими цілими числами.
let arr = [];
for (let i = 1; i <= 10; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    arr.push(num);
}

console.log(arr);
