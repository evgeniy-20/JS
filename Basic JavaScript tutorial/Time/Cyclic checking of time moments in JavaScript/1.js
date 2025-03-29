// Розгляньте проміжок від 2000 року до поточного року. Визначте, скільки разів 1 січня в цьому проміжку припадало на вихідний день, тобто на суботу або на неділю.

let count = 0;
const startYear = 2000;
const endYear = new Date().getFullYear();
const startDate = new Date(startYear, 0, 1);
const endDate = new Date(endYear, 0, 1);
const currentDate = new Date(startDate);
const dayOfWeek = ['Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const wekendDays = [0, 6];
const wekendDaysNames = ['Sunday', 'Saturday'];
console.log(wekendDaysNames);
