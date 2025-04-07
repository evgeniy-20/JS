// Дана кнопка, значенням якої слугує число 1. Зробіть так, щоб після кліка на цю кнопку її значення щоразу збільшувалося на одиницю. Після того, як значення кнопки досягне 10 - відв'яжіть обробник події, щоб кнопка більше не реагувала на натискання.

let number = document.querySelector('#number');
let count = 0;
number.addEventListener('click', function () {
    if (count < 10) {
        count++;
        number.innerHTML = count;
    } else {
        number.removeEventListener('click', function () {
            count++;
            number.innerHTML = count;
        })
    }
})
