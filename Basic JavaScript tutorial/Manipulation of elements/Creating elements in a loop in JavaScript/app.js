// Дано порожній ul. Запустіть цикл, який вставить у нього 10 тегів li. Зробіть так, щоб текстом кожної li був її порядковий номер.

let elem = document.querySelector('.elem');
for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li'); //  створюємо тег  li
    li.textContent += i; //  встановлюємо текст у li у вигляді порядклвого номера
    elem.appendChild(li); //  встновлюємо li у elem

}
