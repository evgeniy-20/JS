// Модифікуйте попереднє завдання так, щоб під списком був інпут, за допомогою якого можна буде додати новий елемент у кінець списку ul. Зробіть так, щоб нові li також можна було редагувати.

let arr = ['Stas', 'Alina', 'Yura', 'Katya', 'Yevhen', 'Kristina'];
let list = document.querySelector('.elem');
let addList = document.querySelector('.addList');

// Функція для створення редагованого <li>
function createEditableLi(text) {
    let li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function () {
        if (li.querySelector('input')) return;

        let input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent;
        li.textContent = '';
        li.appendChild(input);
        input.focus();

        input.addEventListener('blur', function () {
            li.textContent = input.value;
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    });

    return li;
}

// Додаємо початкові елементи
for (let elem of arr) {
    let li = createEditableLi(elem);
    list.appendChild(li);
}

// Додаємо нові елементи при натисканні Enter
addList.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && addList.value.trim() !== '') {
        let li = createEditableLi(addList.value.trim());
        list.appendChild(li);
        addList.value = ''; // Очистити поле
    }
});
