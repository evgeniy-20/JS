// Зробіть функцію isLeap, яка параметром прийматиме рік і повертатиме true, якщо цей рік високосний, і false - якщо ні.

const isLeap = (year) => {
    let date = new Date(year, 1, 29);
    if (date.getDate() === 29) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeap(2024));
