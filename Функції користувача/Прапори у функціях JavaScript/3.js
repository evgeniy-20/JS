// Зробіть функцію, яка параметром прийматиме масив і перевірятиме, чи є в цьому масиві два однакові елементи поспіль.
function hasConsecutiveDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

// Приклад використання:
console.log(hasConsecutiveDuplicates([1, 2, 3, 4, 4, 5])); // Поверне true, оскільки є два однакові елементи поспіль (4)
console.log(hasConsecutiveDuplicates([1, 2, 3, 4, 5])); // Поверне false, немає двох однакових елементів поспіль
