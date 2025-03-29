// Модифікуйте попередню задачу так, щоб на екран виводилася різниця в роках.
let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diff = date2 - date1;
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let months = Math.floor(days / 30);
let years = Math.floor(months / 12);
console.log(years);
