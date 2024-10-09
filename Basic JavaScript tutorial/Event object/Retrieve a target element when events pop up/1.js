// Дано такі елементи: Навішайте на диво обробник кліка. У цьому обробнику визначте, у якому з тегів спрацювала подія.

let div = document.querySelector('div');

div.addEventListener('click', function (event) {
    if (event.target.matches('div')) {
        console.log('клик саме по div');
    }
    if (event.target.matches('UL')) {
        console.log('клик саме по ul');
    }
    if (event.target.matches('LI')) {
        console.log('клик саме по li');
    }
});
