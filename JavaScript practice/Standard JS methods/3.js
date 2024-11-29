// Масиви: Напиши функцію, яка повертає масив лише парних чисел із заданого.
const arrayOfPairs = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(arrayOfPairs([1, 2, 3, 4, 5]));
