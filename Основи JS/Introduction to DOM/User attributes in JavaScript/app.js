//Зробіть так, щоб по кліку на див у кінець його тексту додався вміст його атрибута data-text.

let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
    elem.innerHTML += elem.dataset.text;
})

//Зробіть так, щоб на кліку на будь-який з дивів йому в кінець записувався його порядковий номер.

let elem1 = document.getElementsByTagName('div');
for( let i = 0; i < elem1.length; i++) {
    elem1[i].addEventListener('click', function() {
        elem1[i].innerHTML += elem1[i].dataset.num;
    })
}
