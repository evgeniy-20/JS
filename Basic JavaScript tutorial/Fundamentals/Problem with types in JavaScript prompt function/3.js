// За допомогою двох функцій prompt запитайте в користувача сторони прямокутника. Виведіть на екран периметр введеного прямокутника.
let side = prompt('Ввведіть сторони прямоугольника через пробіл');
let sides = side.split(' ');
alert(Number(sides[0]) * 2 + Number(sides[1]) * 2);
