// Нехай у вас є список ul з тегами li: Результат виконання коду: Прив'яжіть до тега ul обробник кліка. У цьому обробнику перевіряйте за допомогою властивості tagName, за яким тегом був клік. Якщо клік був по тегу li - додайте в кінець тексту цього тега знак оклику. А якщо клік був за тегом ul - виведіть інформацію про це в консоль.

let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.innerHTML += '!';
    } else {
        console.log('Click on ul');
    }
})
