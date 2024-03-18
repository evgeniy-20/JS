// Обчислити площу трикутника за довжинами його сторін a, b і c.

let a = 5;
let b = 7;
let c = 6;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);
