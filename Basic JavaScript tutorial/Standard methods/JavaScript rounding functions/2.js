// Знайдіть квадратний корінь з 587. Округліть результат у більшу та меншу сторони, запишіть результати округлення в об'єкт із ключами 'floor'та 'ceil'.
let num = Math.sqrt(587);
let floor = Math.floor(num);
let ceil = Math.ceil(num);
let obj = {
    floor: floor,
    ceil: ceil
}

console.log(obj);
