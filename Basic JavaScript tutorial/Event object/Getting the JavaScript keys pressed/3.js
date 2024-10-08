// Визначте, який код буде мати клавішу Enter.

let elem = document.querySelector('#elem');
elem.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Код клавіші: ', event.code);
        console.log('Назва клавіші: ', event.key);
    }
})
