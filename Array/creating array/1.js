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
