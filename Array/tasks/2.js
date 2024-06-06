// Сума елементів: Напишіть функцію, яка приймає масив чисел і повертає їх суму.

const getsum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

console.log(getsum([1, 2, 3, 45, 65, 78, 76, 87]));
