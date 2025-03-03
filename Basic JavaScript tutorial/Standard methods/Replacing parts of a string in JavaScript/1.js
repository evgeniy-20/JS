// Дано рядок '1-2-3-4-5'. Змініть усі дефіси на точки.

let str = '1-2-3-4-5';
let elem = '-'
while (str.includes(elem)) {
    str = str.replace(elem, '.');
}
console.log(str);
