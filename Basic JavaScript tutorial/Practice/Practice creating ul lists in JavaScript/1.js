// Дан ul: Дано масив. Вставте елементи цього масиву в кінець ul так, щоб кожен елемент стояв у своєму li.

let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem;
    parent.appendChild(li);
}
