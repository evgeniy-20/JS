// Зробіть так, щоб під час руху мишки сторінкою, відображалися координати курсору, подібно до того, як це зроблено в наступному зразку:

let elem = document.getElementById('elem');

elem.addEventListener('mousemove', function (event) {
    elem.innerHTML = event.clientX + ' : ' + event.clientY;
});
