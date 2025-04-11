// Дано інпут. У нього вводиться число. Перевірте за втратою фокуса, що це число містить усередині себе цифру 3.

let number = document.querySelector('#number');

number.addEventListener('blur', function () {
    let value = number.value;
    if (value.includes('3')) {
        alert('The number contains 3');
    } else {
        alert('The number does not contain 3');
    }
});
