// Визначте, який код буде у клавіші BackSpace.

let input = document.querySelector('input');
input.addEventListener('keydown', function (event) {
    if (event.code === 'Backspace') {
        console.log('Backspace key pressed!');
    }
});
