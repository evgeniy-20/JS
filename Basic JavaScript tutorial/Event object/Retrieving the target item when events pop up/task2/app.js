// Навішайте на див обробник кліка. У цьому обробнику визначте, в якому з тегів спрацювала подія.

let div = document.querySelector('div');
div.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV') {
        console.log('Div clicked!');
    } else if (event.target.tagName === 'UL') {
        console.log('UL clicked!');
    } else if (event.target.tagName === 'LI') {
        console.log('List item clicked!');
    }
})
