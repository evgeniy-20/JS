// Знайдіть квадратний корінь з 587. Округліть результат у більшу та меншу сторони, запишіть результати округлення в об'єкт із ключами 'floor'та 'ceil'.

let sqrt = Math.sqrt(587);
let floor = Math.floor(sqrt);
let ceil = Math.ceil(sqrt);
let obj = {
    'floor': floor,
    'ceil': ceil
}

console.log(obj);
