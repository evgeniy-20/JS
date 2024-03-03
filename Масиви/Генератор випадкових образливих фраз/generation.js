let randomBodyParts = ['Face', 'Nose', 'Hair'];
let randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
let randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];

// Обираємо випадкову частину тіла із маисиву randomBodyParts;

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// Обираємо випадковий прикметник із масиву randomAdjectives;

let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Обираємо випадкове слово із масиву randomWords;

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// З'єднуємо усі випадкові рядки у речення:

let randomInsult = 'Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!';

console.log(randomInsult);

// Нові образливі фрази

let adverbs = ["stupid", "inhuman", "disgusting", "boring", "boring"];
let adjectives = ["frog", "pig", "asshole", "beggar", "irresponsible"];
let nouns = ["liar", "shit", "loser", "lazy", "scared"];

// Обираємо випадковий прислівник  із маисиву adverb;

let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];

// Обираємо випадковий прикметник із маисиву adjectives;

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

// Обираємо випадковий іменник із маисиву nouns;

let noun = nouns[Math.floor(Math.random() * nouns.length)];

// З'єднуємо усі випадкові рядки у речення:

let resultInsult = 'You ' + adverb + ' ' + adjective + ' ' + noun;

console.log(resultInsult);

// Ображаємо витонченіше

const фрази = [
    "Ти видаєшся мені людиною з обмеженими можливостями...",
    "Ти настільки пустий, що навіть світло не вдається проходити через тебе.",
    "В тебе немає навіть тіні, яка могла б розуміти твої наміри.",
    "Ти виняткової дурниці, що лише існує, щоб набридати оточуючим.",
    "Ти - як відсутність апетиту перед безсмаковим обідом.",
    "Твоя присутність має такий самий ефект, як глибока ніч без зірок.",
    "Існує слова, щоб описати твою безглуздість, але навіть вони відмовляються від свого завдання."
];

function образливаФраза() {
    return фрази[Math.floor(Math.random() * фрази.length)];
}

console.log(образливаФраза());

// З'єднуємо числа

let arr = [3, 2, 1];

let three = ' is bigger than ';
let two = ' is bigger than ';

let result = arr[0].toString().concat(three, arr[1].toString(), two, arr[2].toString());

console.log(result);
