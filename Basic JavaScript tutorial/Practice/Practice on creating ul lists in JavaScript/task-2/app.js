// Модифікуйте попередню задачу так, щоб за кліком на будь-який зі вставлених елементів на екран виводився текст цього елемента.

let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem
    li.addEventListener('click', function () {
        alert(li.textContent);
    })
    parent.append(li);
}
