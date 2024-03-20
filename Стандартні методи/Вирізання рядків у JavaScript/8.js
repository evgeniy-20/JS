// Напишіть програму, яка перевіряє, чи є даний рядок паліндромом (рядок, який однаково читається зліва направо та зправа наліво), використовуючи методи substr або substring для порівняння частин рядка.

function isPalindrome(str) {
    // Видаляємо пробіли і перетворюємо рядок на нижній регістр для коректного порівняння
    str = str.toLowerCase().replace(/\s/g, '');

    // Отримуємо довжину рядка
    let len = str.length;

    // Перевіряємо, чи кожен символ на i-тій позиції дорівнює символу на позиції len - 1 - i
    for (let i = 0; i < len / 2; i++) {
        if (str.substr(i, 1) !== str.substr(len - 1 - i, 1)) {
            return false;
        }
    }
    return true;
}

let str = "A man a plan a canal Panama";
console.log(isPalindrome(str)); // Виведе: true
