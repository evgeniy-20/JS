// Дано інпут. У нього вводиться слово. Після натискання на кнопку перевірте те, що це слово читається з початку і з кінця однаково (наприклад, мадам).

function checkPalindrome() {
    const word = document.getElementById('wordInput').value.toLowerCase().replace(/[\W_]/g, '');
    const reversedWord = word.split('').reverse().join('');

    const resultElement = document.getElementById('result');

    if (word === reversedWord) {
        resultElement.textContent = "Це слово є паліндромом!";
    } else {
        resultElement.textContent = "Це слово не є паліндромом.";
    }
}
