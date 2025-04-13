// Зробіть так, щоб за кліком на див у кінець його тексту додався вміст його атрибута data-text.

let elem = document.querySelector('#elem');
elem.addEventListener('click', function () {
    elem.innerHTML += elem.dataset.text;
});
