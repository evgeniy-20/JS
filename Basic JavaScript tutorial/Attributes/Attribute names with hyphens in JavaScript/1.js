// Даний наступний код: Зробіть так, щоб на кліку на див в кінець його тексту додавалася вартість покупки, що дорівнює ціні, помноженій на кількість.

let elem = document.querySelector('#elem');
elem.addEventListener('click', function () {
    let price = Number(elem.dataset.productPrice);
    let amount = Number(elem.dataset.productAmount)
    let totalCost = price * amount
    elem.textContent += `${totalCost}`;
})
