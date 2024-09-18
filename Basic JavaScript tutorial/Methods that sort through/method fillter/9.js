// Даний масив із числами. Залиште в ньому тільки числа, які більші за нуль, але менше 10.

let arr = [-1, 2, -3, 4, -5, 15, 45, 3, 65];

let result = arr.filter(elem => {
    if (elem > 0 && elem < 10) {
        return true;
    } else {
        return false;
    }
});

console.log(result);
