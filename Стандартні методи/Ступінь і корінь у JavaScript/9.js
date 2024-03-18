// Визначити відстань між двома точками у тривимірному просторі (x1, y1, z1) і (x2, y2, z2).

let x1 = 5;
let y1 = 3;
let z1 = 6;
let x2 = 7;
let y2 = 8;
let z2 = 9;

let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));

console.log(result);
