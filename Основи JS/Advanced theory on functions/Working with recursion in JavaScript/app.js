//Даний масив: let arr = [1, 2, 3, 4, 5];
//За допомогою рекурсії виведіть елементи масиву в консоль.

// let arr = [1, 2, 3, 4, 5];
// const func = () => {
//     console.log(arr.shift(), arr);
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// func(arr);
//Даний масив: let arr = [1, 2, 3, 4, 5];
//За допомогою рекурсії знайдіть суму квадратів елементів цього масиву.
let arr = [1, 2, 3, 4, 5];
let sqrt = 0;
const getSum = (arr) => {
	let sum = arr.shift();

	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	sqrt += Math.pow(sum);
	return sqrt;
}

console.log(getSum(arr));