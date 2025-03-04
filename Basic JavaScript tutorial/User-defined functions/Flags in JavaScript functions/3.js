// Зробіть функцію, яка параметром прийматиме масив і перевірятиме, чи є в цьому масиві два однакові елементи поспіль.
function hasConsecutiveDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) { // Якщо поточний елемент дорівнює наступному
            return true;
        }
    }
    return false;
}

console.log(hasConsecutiveDuplicates([1, 2, 3, 3, 5])); // true
console.log(hasConsecutiveDuplicates([1, 2, 3, 4, 5])); // false
console.log(hasConsecutiveDuplicates([7, 7, 8, 9, 10])); // true
console.log(hasConsecutiveDuplicates([])); // false
console.log(hasConsecutiveDuplicates([1])); // false
