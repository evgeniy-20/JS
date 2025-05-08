// Модифікуйте попередню задачу так, щоб клік на вставлений елемент призводив до того, що в кінець його тексту додаватиметься '!'.

let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');

let newElement = document.createElement('li');
newElement.textContent = 'new';
parent.insertBefore(newElement, elem);

newElement.addEventListener('click', function () {
    newElement.textContent += '!';
})
