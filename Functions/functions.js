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

// Функція для вибору випадкового слова
function pickWord() {
    var words = ["javascript", "programming", "computer", "science", "algorithm"];
    return words[Math.floor(Math.random() * words.length)];
}

// Функція для налаштування масиву відповідей
function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

// Функція для показу гравцю прогресу
function showPlayerProgress(answerArray) {
    alert("Current state of the word: " + answerArray.join(" "));
}

// Функція для отримання варіанту відповіді від гравця
function getGuess() {
    return prompt("Enter a single letter or click Cancel to stop playing:").toLowerCase();
}

// Функція для оновлення гри після варіанту відповіді від гравця
function updateGameState(guess, word, answerArray) {
    var correctGuesses = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            correctGuesses++;
        }
    }
    return correctGuesses;
}

// Функція для показу відповіді та привітання гравця
function showAnswerAndCongratulatePlayer(answerArray) {
    alert("Good job! The word was " + answerArray.join("") + ".");
}

// Основна функція гри
function hangman() {
    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;

    while (remainingLetters > 0) {
        showPlayerProgress(answerArray);
        var guess = getGuess();

        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            var correctGuesses = updateGameState(guess, word, answerArray);
            remainingLetters -= correctGuesses;
        }
    }

    showAnswerAndCongratulatePlayer(answerArray);
}

// Запускаємо гру
hangman();
