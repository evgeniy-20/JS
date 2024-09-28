// Отримайте роки, сума цифр яких дорівнює 6. Знайдіть суму отриманих років.

let elems = document.querySelectorAll('ul li');
let sum = 0;
function sumOfDigits(num) {
    return num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
}

for (let elem of elems) {
    let num = Number(elem.textContent);
    if (sumOfDigits(num) === 6) {
        sum += num;
    }
}
console.log(sum);
