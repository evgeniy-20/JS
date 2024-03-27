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

// Рахуємо з функцією

function add(num1, num2) {
    return num1 + num2;
}

function multiplay(num1, num2) {
    return num1 * num2;
}

let result = add(multiplay(36325, 9824), 777);

console.log(result);

// чи однакові функції

function areArraysSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(areArraysSame([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); // false

// Створюємо гру шибениця, використовуючи функції
