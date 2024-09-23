// Модифікуйте попереднє завдання так, щоб на екран виводилася різниця у днях.

let feb = new Date(2010, 1, 15, 23, 59, 59);
let sep = new Date(2000, 8, 1, 23, 59, 59);
let difference = feb - sep;
let differenceInDay = difference / (1000 * 60 * 60 * 24);
console.log(differenceInDay);
