// Модифікуйте попередню задачу так, щоб за кліком на будь-яку li в ній з'являвся інпут, за допомогою якого її можна буде відредагувати.
let arr = ['Stas', 'Alina', 'Yura', 'Katya', 'Yevhen', 'Kristina'];
let list = document.querySelector('.elem');

for (let elem of arr) {
    let li = document.createElement('li');
    li.innerHTML = elem;
    list.appendChild(li);

    li.addEventListener('click', function () {
        // Якщо вже є input — не створювати новий
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

        // Щоб можна було натиснути Enter
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                input.blur(); // втратить фокус і спрацює подія blur
            }
        });
    })
}
