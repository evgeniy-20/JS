// Зробіть так, щоб за кліком на будь-який із дівівів йому в кінець записувався його порядковий номер.

let elems = document.querySelectorAll('div');

elems.forEach((elem, index) => {
    elem.addEventListener('click', function () {
        this.textContent += index + 1;
    });
});
