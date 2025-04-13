// Зробіть так, щоб за кліком на див у кінець його тексту додавалася вартість купівлі, що дорівнює ціні, помноженій на кількість.

let elem = document.querySelector('#elem');

elem.addEventListener('click', function () {
    let price = parseInt(elem.dataset.productPrice);
    let count = parseInt(elem.dataset.productCount);
    let total = price * count;

    // Додаємо вартість до кінця тексту
    elem.innerHTML += ` Вартість: ${total}`;
});
