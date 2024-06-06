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

console.log(Math.floor(Math.random() * animals1.length));

// Знайти суму всіх елементів масиву:

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// Знайти найбільший елемент масиву:

const numbers1 = [10, 20, 30, 5, 15];

console.log(Math.max(...numbers1));

// Знайти найменший елемент масиву:

const numbers2 = [10, 20, 30, 5, 15];

console.log(Math.min(...numbers1));

// Знайти середнє значення елементів масиву:

const numbers3 = [1, 2, 3, 4, 5];

// Створення масиву: Створи масив з числами від 1 до 10.

let arr1 = [];

for (let i = 1; i <= 10; i++) {
    arr1.push(i);
};

console.log(arr1);

// Доступ до елементів: Виведи на екран третій елемент масиву.

console.log(arr1[2]);

// Зміна елементу: Змініть значення п'ятого елементу масиву на 42.

arr1[4] = 45;

console.log(arr1);

// Додавання елементів: Додай число 100 в кінець масиву.
arr1.push(100)
console.log(arr1);

// Видалення елементу: Видали останній елемент масиву.

arr1.pop();

console.log(arr1);

// Додавання на початок: Додай число 0 на початок масиву.

arr1.unshift(0);

console.log(arr1);

// Видалення з початку: Видали перший елемент масиву.

arr1.shift();

console.log(arr1);

// З'єднання масивів: Створи два масиви з числами та з'єднай їх в один.

let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
let result = arr2.concat(arr3);
console.log(result);
// Перевірка наявності:Первір чи є в масиві число 5

let arr4 = [1, 2, 3, 4, 5, 6];

if (arr4.includes(5)) {
    console.log("Число 5 є в масиві");
} else {
    console.log("Числа 5 немає в масиві");
}

// Індекс елементу: знайть індексчисла 7 в масиві

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr5.indexOf(7));

// Реверс масиву: Перевени порядок елементів у масиві

console.log(arr5.reverse());

// Сортування масиву. Відсортуруйте масив за зростанням

let arr6 = [2, 1, 3, 5, 4, 7, 8, 9, 0];
console.log(arr6.sort());

// Об'єднай всі елементи в строку розділивши їх комами

console.log(arr5.join(','));

// Перетворення елементів. Помнож кожен елемент масиву на 2
arr5 *= 2;
console.log(arr5);

// Знайдіть мінімум. Знайдіть найменше число у масиві

console.log(Math.min([2, 1, 3, 5, 4, 7, 8, 9, 0]));

// Знайдіть максимум. Знайдіть найбільше число у масиві

console.log(Math.max([2, 1, 3, 5, 4, 7, 8, 9, 0]));

// Сума елементів. знайдіть суму елементів у масиві

// let arr7 = [1, 2, 3, 4, 5, 6, 7];
// let sum1 = 0;
// for (let i = 0; i < arr7.length; i++) {
//     sum1 += arr7[i];
// }
// console.log(sum1);

// Середнє значення. Знайть середнє значення чисел у масиві.

let arr7 = [1, 2, 3, 4, 5, 6, 7];
let sum1 = 0;
for (let i = 0; i < arr7.length; i++) {
    sum1 += arr7[i];
}
let result1 = sum1 / arr7.length;
console.log(result1);
