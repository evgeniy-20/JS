// Дано масив. Виведіть його елементи у вигляді списку ul.

let arrs = ['text1', 'text2', 'text3'];
let ul = document.createElement('ul');
for (let arr of arrs) {
    let li = document.createElement('li');
    li.textContent = arr;
    ul.appendChild(li);
}

document.body.appendChild(ul);
