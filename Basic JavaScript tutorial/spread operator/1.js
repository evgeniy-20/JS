// Напиши функцію mergeArrays(arr1, arr2), яка приймає два масиви та повертає новий масив, що містить усі елементи з обох масивів. Використовуй spread-оператор.

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
