// Масиви: Реалізуй функцію, яка знаходить середнє значення чисел у масиві.

const getArraySum = (arr) => {
    let result = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    }
    return result;
}

console.log(getArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
