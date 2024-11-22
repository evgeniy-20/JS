// Три числа Дано три числа a, b і c. Визначте, яке з них найбільше.

let a = 45;
let b = 65;
let c = 55;

if (a >= b && a >= c) {
    console.log('Максиальне число ' + a);
} else if (b >= a && b >= c) {
    console.log('Максиальне число ' + b);
} else {
    console.log('Максиальне число ' + c);
}
