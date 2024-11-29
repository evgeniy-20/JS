// Числа: Згенеруй масив із 10 випадкових чисел від 1 до 100 і відсортуй його.
const generateAndSortArray = () => {
    const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    return randomArray.sort((a, b) => a - b);
};

console.log(generateAndSortArray());
