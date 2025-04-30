// Визначте, який код буде у клавіші Enter.

let input = document.querySelector('input');
input.addEventListener('keypress', function (event) {
    if (event.code === 'Enter') {
        console.log('Enter key pressed!');
    }
})
