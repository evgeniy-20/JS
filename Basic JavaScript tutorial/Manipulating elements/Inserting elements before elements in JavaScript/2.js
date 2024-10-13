// Модифікуйте попереднє завдання так, щоб клік на вставлений елемент призводив до того, що до кінця його тексту буде додаватися '!'.

let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
elem.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'new';
    li.addEventListener('click', function () {
        this.textContent += '!';
    })
    parent.insertBefore(li, elem);
})
