// Визначте, який день тижня буде 31 в грудні поточного року.

let date = new Date(2024, 11, 31); // Місяць 11 відповідає грудню
let dayOfWeek = date.getDay(); // Отримуємо день тижня (0 - Неділя, 1 - Понеділок і т.д.)

console.log(dayOfWeek);
