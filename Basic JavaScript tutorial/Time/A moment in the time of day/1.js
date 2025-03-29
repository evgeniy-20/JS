// Визначте, скільки годин минуло між учорашнім полуднем і поточним моментом часу.

let now = new Date();
let yeasterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12, 0, 0);
let diff = now - yeasterday;
console.log(diff);
