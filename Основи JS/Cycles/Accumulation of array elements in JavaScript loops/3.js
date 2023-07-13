// Даний масив: let arr = [2, 5, 9, 3, 1, 4]; Знайдіть суму квадратів елементів цього масиву.

let arr = [2, 5, 9, 3, 1, 4];
let sumOfSquares = 0;

for(let elem of arr) {
    let square = elem * elem;
    sumOfSquares += square;
}
console.log(sumOfSquares);