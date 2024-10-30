// Модифікуйте попередню задачу так, щоб за кліком на будь-яку li в ній з'являвся інпут, за допомогою якого її можна буде відредагувати.

let arrs = ['text1', 'text2', 'text3'];
let ul = document.createElement('ul');
for (let arr of arrs) {
    let li = document.createElement('li');
    li.textContent = arr;
    li.addEventListener('click', function () {
        let input = document.createElement('input');
        input.value = li.textContent;
        // Додаємо подію інпут для зберігання змін
        input.addEventListener('blur', function () {
            li.textContent = input.value;
            li.appendChild(input);
        });
        li.textContent = '';
        li.appendChild(input);
        input.focus();
    });
    ul.appendChild(li);
}

document.body.appendChild(ul);
