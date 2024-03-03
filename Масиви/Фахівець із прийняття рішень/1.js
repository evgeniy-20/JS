// Використовуємо метод Math.random

console.log(Math.random());

// Використовуємо метод Math.floor

console.log(Math.floor(3.756789));
console.log(Math.floor(Math.random() * 4));

let randomWords = ['Explosion', 'Cave', 'Princess', 'Pen'];
let randomIndex = Math.floor(Math.random() * 4);

console.log(randomWords[randomIndex]);

// Фахівець із прийняття рішень

let phrases = [
    'That sounds good',
    'Yes, you should definitely do that',
    'I`m not sure that`s a great idea',
    'Maybe not today?',
    'Computer say no.'
]
// Мені слід випити ще один мілк-шейк?
console.log(phrases[Math.floor(Math.random() * phrases.length)]);
// Чи варто ені робити домашнє завдання?
console.log(phrases[Math.floor(Math.random() * phrases.length)]);
