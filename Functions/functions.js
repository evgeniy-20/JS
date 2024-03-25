// Створюємо просту функцію

let ourFirstFunction = function () {
    console.log('Hello world!');
};


// Викликаємо функцію

ourFirstFunction();

// передаємо функціям аргументи

let sayHelloTo = function (name) {
    console.log('Hello ' + name + '!');
};

sayHelloTo('Yevhen');

// Друкуємо котячі мордочки

let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + '=^.^=');
    }
};

drawCats(10);

// Передаємо функції декілька аргументів

let printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + ' ' + whatToDraw);
    }
};
printMultipleTimes(4, '^.^');

// Повертаємо значення з функції

let double = function (number) {
    return number * 2;
};

console.log(double(3));

// Функція для оброблення випадкового слова
let randomWords = ['Planet', 'Worm', 'Flower', 'Computer'];
let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * randomWords.length)];
}
console.log(pickRandomWord(randomWords));
