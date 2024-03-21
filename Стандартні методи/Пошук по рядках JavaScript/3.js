// Напишіть функцію, яка приймає масив слів та слово для пошуку. Перевірте, чи входить це слово у масив.

let arr = ['Stas', 'Yura', 'Yevhen'];

function getArr(arr, word) {
    return arr.includes(word);
}

console.log(getArr(arr, 'Alina'));
