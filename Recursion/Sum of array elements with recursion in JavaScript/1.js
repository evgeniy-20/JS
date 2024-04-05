// Даний масив: За допомогою рекурсії знайдіть суму квадратів елементів цього масиву.

let arr = [1, 2, 3, 4, 5];

function getSqrt(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let firstElement = arr[0];
        let restOfArray = arr.slice(1);
        return (firstElement * firstElement) + getSqrt(restOfArray);
    }
}

console.log(getSqrt(arr));
