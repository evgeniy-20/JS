// Модифікуйте попереднє завдання так, щоб на екран виводилася різниця у роках.

let feb = new Date(2010, 1, 15, 23, 59, 59);
let sep = new Date(2000, 8, 1, 23, 59, 59);
let yearOfDifrence = feb.getFullYear() - sep.getFullYear();
console.log(yearOfDifrence);
