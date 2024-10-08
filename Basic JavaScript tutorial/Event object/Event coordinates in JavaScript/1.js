// Зробіть так, щоб під час руху мишки по сторінці, відображалися координати курсору, подібно до того, як це зроблено в наступному зразку:
let elem = document.querySelector('#elem');
elem.addEventListener('mousemove', function () {
    elem.innerHTML = 'X: ' + event.clientX + ', Y: ' + event.clientY;
})
