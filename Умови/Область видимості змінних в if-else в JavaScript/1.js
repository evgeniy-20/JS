let age = 17;
let adult; // Оголошуємо змінну на рівні вище

if (age >= 18) {
    adult = true; // Присвоюємо значення змінній без ключового слова "let"
} else {
    adult = false; // Те ж саме
}

console.log(adult);
