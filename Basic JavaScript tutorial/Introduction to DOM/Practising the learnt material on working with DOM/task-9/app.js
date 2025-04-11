// Дано інпут. У нього вводиться слово. Після натискання на кнопку перевірте те, що це слово читається з початку і з кінця однаково (наприклад, мадам).

let word = document.querySelector('#input');
let click = document.querySelector('#click');
click.addEventListener('click', function () {
    let wordValue = word.value.toLowerCase();
    let reverseWord = wordValue.split('').reverse().join('');
    if (wordValue === reverseWord) {
        alert('Слово читається однаково з початку і з кінця');
    } else {
        alert('Слово не читається однаково з початку і з кінця');
    }
})
