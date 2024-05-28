// Створ.ємо масив

let dinosaurs = [
    'T-Rex',
    'Velociraptor',
    'Stegosaurus',
    'Triceratops',
    'Brachiosaurus',
    'Pteranodon',
    'Apatosaurus',
    'Diplodocus',
    'Compsognathus'
];

// Видобовуємо елементи із масиву

console.log(dinosaurs[0]);

// Встановлюємо та змінюємо елементи у масиві
dinosaurs[0] = 'Tyrannosaurus Rex'
console.log(dinosaurs);

// Міксуємо типи даних у масиві

let dinosaursAndNumbers = [3, 'dinosaurs', ['triceratops', 'stegosaurus', 3627.5], 10];
console.log(dinosaursAndNumbers[2][0]);

// Працюємо з масивами
// дізнаємось довжину масиву

let maniacs = ["Yakko", "Wakko", "Dot"];
console.log(maniacs[maniacs.length - 1]);

// Додаємо елементи до масиву

let animals = [];

animals.push('Cat');
animals.push('Dog');
animals.push('Llama');
animals.unshift('Monkey');
animals.unshift('Polar Bear');
console.log(animals);

// Видаляємо елементи з масиву

let lastAnimals = animals.pop();
console.log(lastAnimals);
console.log(animals);
console.log(animals.pop());
console.log(animals);
animals.unshift(lastAnimals);
console.log(animals);

// Метод shift

let firstAnimals = animals.shift();
console.log(firstAnimals);
console.log(animals);

// Об'жднуємо масиви

let furryAnimals = ['Alpaca', 'Ring-tailed Lemur', 'Yeti'];
let scalyAnimals = ['Boa Constrictor', 'Godzilla'];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);

// об'єднуємо більше ніж два масиви

let featheredAnimals = ['Macaw', 'Dodo'];
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);

//  знаходимо індекс елемента у масиві

let colors = ['red', 'green', 'blue'];
console.log(colors.indexOf('blue'));
console.log(colors.indexOf('green'));

// Перетворюємо масив у рядок

let boringAnimals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
console.log(boringAnimals.join());

// конструюємо масив за допомогою методу push

let landmarks = [];
landmarks.push('My house');
landmarks.push('Front path');
landmarks.push('Flickering streetlamp');
landmarks.push('Leaky fire hydrant');
landmarks.push('Fire station');
landmarks.push('Cat rescue center');
landmarks.push('My old school');
landmarks.push('My friend`s house');
console.log(landmarks);
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
console.log(landmarks);

//  Фахівець із прийняття рішень
// Використовуємо метод math.random
console.log(Math.random());
console.log(Math.random() * 10);

// Заокруглюємо до меншого за допомогою методу math.floor

console.log(Math.floor(Math.random() * 4));

let randomWords = ['Exsplosion', 'Cave', 'Proncess', 'Pen'];
let randomIndex = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndex]);

// Фахівець із прийняття рішень: повна версія

let phrases = [
    'That sounds good',
    'Yes, you should definitely do that',
    'I`m not sure that`s a greate idea',
    'Maybe not today?',
    'Computer says no.'
]

// Мені слід випити ще один мілк-шейк?

console.log(phrases[Math.floor(Math.random() * 5)]);

// Чи варто мені робити домашнє завдання?

console.log(phrases[Math.floor(Math.random() * 5)]);

// Створюємо генератор випадкових образливих фраз

let randomBodyParts = ['Fase', 'Noise', 'Hair'];
let randomAbjectives = ['Smelly', 'Boring', 'Stupid'];
let randomWords1 = ['Fly', 'Mormot', 'Stick', 'Monkey', 'Rat'];

//  Обираємо випадкову частину тіла із масиву randomBodyParts

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

//  Обираємо випаковий прикметник із масиву randomAbjectives

let randomAbjective = randomAbjectives[Math.floor(Math.random() * randomAbjectives.length)];

//  Обираємо випадкове слово із масиву randomWords1

let randomWord1 = randomWords1[Math.floor(Math.random() * randomWords1.length)];

// З'єднуємо усі випадкові рядки у речення

let randomInsult = "Your " + randomBodyPart + ' is like a ' + randomAbjective + ' ' + randomWord1 + '!!!';

console.log(randomInsult);

// Згенеруйте випадкове ціле число від 1 до 10 та виведіть його в консоль.

let number = Math.floor(Math.random() * 10) + 1;

console.log(number);

// Знайдіть випадкове дробове число від 0 до 1 та виведіть його в консоль.

console.log(Math.random());

// Створіть масив з 5 випадкових цілих чисел від 10 до 20 та виведіть його в консоль.

let arr = [];

for (let i = 0; i <= 5; i++) {
    arr.push(Math.floor(Math.random() * 11) + 10);
}
console.log(arr);

// Виберіть випадковий елемент з масиву ['cat', 'dog', 'mouse', 'bird', 'fish'] та виведіть його в консоль.

let animals1 = ['cat', 'dog', 'mouse', 'bird', 'fish'];
