// Визначте, який код буде мати клавішу BackSpace.

let elem = document.querySelector('#elem');
elem.addEventListener('keydown', function (event) {
    if (event.key === 'BackSpace') {
        console.log('Код клавіші: ', event.code);
        console.log('Назва клавіші: ', event.key);
    }
})
