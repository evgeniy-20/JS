// Виведіть на екран кількість місяців, що минуло між вашим народженням та поточним моментом часу.

let now = new Date();
let date = new Date(1997, 5, 10);

// Обчислюємо різницю в роках і місяцях
let yearsDifference = now.getFullYear() - date.getFullYear();
let monthsDifference = now.getMonth() - date.getMonth();

// Якщо поточний місяць менший за місяць народження, зменшуємо кількість років на 1 і додаємо 12 місяців
if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
}

// Загальна кількість місяців
let totalMonths = yearsDifference * 12 + monthsDifference;

console.log(totalMonths);
