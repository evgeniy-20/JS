// Напиши скрипт, який збереже в localStorage імена трьох друзів під ключами friend1, friend2, friend3. Потім напиши скрипт, який отримає ці імена і виведе їх у форматі: Мої друзі: Андрій, Оксана, Марко

localStorage.setItem('friend1', 'Андрій');
localStorage.setItem('friend3', 'Осана');
localStorage.setItem('friend3', 'Марко');
// Отримуємо значення з localStorage
let a = String(localStorage.getItem('friend1'));
let b = String(localStorage.getItem('friend2'));
let c = String(localStorage.getItem('friend3'));

// Знаходимо суму
let res = a + b + c;

// Виводимо результат
console.log(`Мої друзі: ${res}`);
