//Виведіть на екран поточну дату-час у форматі 12:59:59 31.12.2014 . Використовуйте для всіх частин дати (крім року) створену нами функцію для додавання нуля за потреби.

// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// let date = new Date();

// console.log(
// 	addZero(date.getFullYear()) + '-' + 
// 	addZero(date.getMonth() + 1) + '-' +
// 	addZero(date.getDate())
// );

let time = new Date;

const addZero = (num) => { 
	if(num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let newTime = addZero(time.getHours()) + ':' + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
let date = new Date;
let newDate = addZero(date.getFullYear()) + '.' + addZero(date.getMonth()) + '.' + addZero(date.getDate());
console.log(newTime);
console.log(newDate);