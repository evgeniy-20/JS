// Дано інпут. У нього вводиться число. Перевірте за втратою фокуса, що це число містить усередині себе цифру 3.

function checkNumber() {
    const number = document.querySelector('#numberInput').value;
    const resultElement = document.querySelector('#result');

    if (number.includes('3')) {
        resultElement.textContent = "Число містить цифру 3!";
    } else {
        resultElement.textContent = "Число не містить цифри 3.";
    }
}
