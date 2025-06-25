// Напишіть скрипт, який збереже в локальному сховищі три числа під трьома різними ключами. Запустіть цей скрипт, щоб дані збереглися. Потім напишіть скрипт, який отримає ваші три числа з локального сховища і знайде їхню суму. Запустіть другий скрипт і переконайтеся в його працездатності.

localStorage.setItem('num1', '5');
localStorage.setItem('num2', '15');
localStorage.setItem('num3', '20');
// Отримуємо значення з localStorage
let a = Number(localStorage.getItem('num1'));
let b = Number(localStorage.getItem('num2'));
let c = Number(localStorage.getItem('num3'));

// Знаходимо суму
let sum = a + b + c;

// Виводимо результат
console.log(`Сума: ${sum}`);
