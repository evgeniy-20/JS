// Модифікуйте отриманий вище код так, щоб за відсутності в масиві значення для місяця за замовчуванням брався поточний місяць, а за відсутності значення для року відповідно поточний рік.

const getDay = () => {
    return (new Date).getDate();
}
const getMonth = () => {
    return (new Date).getMonth() + 1;
}
const getFullYear = () => {
    return (new Date).getFullYear();
}
let arr = [];
let [year = getFullYear(), month = getMonth(), day = getDay()] = arr;

console.log(year);
console.log(month);
console.log(day);
