// Зробіть функцію, яка параметром прийматиме масив із числами, і перевірятиме, що всі елементи в цьому масиві є парними числами.
function areAllEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true; // Повертає true, якщо всі елементи є парними числами
}

// Приклад використання:
const numbers1 = [2, 4, 6, 8, 10];
const numbers2 = [2, 3, 4, 6, 8];

console.log(areAllEvenNumbers(numbers1)); // Поверне true, всі числа парні
console.log(areAllEvenNumbers(numbers2));
