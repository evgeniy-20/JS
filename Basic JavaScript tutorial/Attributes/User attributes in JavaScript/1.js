// Даний наступний код: Зробіть так, щоб по кліку на див у кінець його тексту додався вміст його атрибута data-text

let elem = document.querySelector('#elem');
elem.addEventListener('click', function () {
    elem.textContent += elem.dataset.text;
});
