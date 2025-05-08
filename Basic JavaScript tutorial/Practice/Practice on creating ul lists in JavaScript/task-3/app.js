// Модифікуйте попередню задачу так, щоб за кліком на li їй у кінець додавався '!'.

let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem
    li.addEventListener('click', function () {
        li.textContent += '!';
    })
    parent.append(li);
}
