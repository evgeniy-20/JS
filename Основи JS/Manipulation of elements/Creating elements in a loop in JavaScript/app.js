//Даний порожній ul. Запустіть цикл, який вставить 10 тегів li. Зробіть так, щоб текст кожної li був її порядковий номер.

let parent = document.querySelector('#parent');

for(let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent += i;

    parent.appendChild(li);
}