//Нехай у вас є функція, що повертає квадратний корінь з числа, і функція, що округляє дріб до трьох знаків у дрібній частині:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
//За допомогою цих функцій знайдіть квадратний корінь із числа 2та округліть його до трьох знаків у дрібній частині.

const getSqrt = (num) => {
	return Math.sqrt(num);
}

const getRound = (num) => {
	return num.toFixed(3);
}
let result = getRound(getSqrt(2));
console.log(result);

//Нехай у вас є функція, що повертає квадратний корінь з числа, і функція, що повертає суму трьох чисел:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
//За допомогою цих функцій знайдіть суму коренів чисел 2і запишіть її в 3 змінну . 4 res

const getSqrt1 = (num) => {
	return Math.sqrt(num);
}

const getSum = (num1, num2, num3) => {
	return num1 + num2 + num3;
}
let result1 = getSqrt1(getSum(2,3,4));
console.log(result1);

//


