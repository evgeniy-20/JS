// Код повинен знайти суму елементів масиву, однак завжди виводить NaN:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum); // чомусь виоде NaN
