// Максимальний елемент: Напишіть функцію, яка приймає масив чисел і повертає максимальний елемент.

const getNumbers = (numbers) => {
    return Math.max(...numbers);
};

console.log(getNumbers([1, 2, 3, 67, 10, 45]));
