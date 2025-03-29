// Визначте, який день тижня буде 31 грудня поточного року.

let now = new Date();
let year = now.getFullYear();
let lastDay = new Date(year, 11, 31);
console.log(lastDay.getDay());
