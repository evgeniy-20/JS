// Дані диви, що містять в атрибуті data-num свій порядковий номер: Зробіть так, щоб на кліку на будь-який з дивів йому в кінець записувався його порядковий номер.

let elems = document.querySelectorAll('div');
elems.forEach(function (elem) {
    elem.addEventListener('click', function () {
        elem.textContent += elem.dataset.num;
    })
})
