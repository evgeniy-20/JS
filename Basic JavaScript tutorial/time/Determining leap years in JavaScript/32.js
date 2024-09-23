// Зробіть функцію isLeap, яка параметром прийматиме рік і повертатиме true, якщо цього року високосний, і false - якщо ні.

const isLeap = (year) => {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
console.log(isLeap(2024));
