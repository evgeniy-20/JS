//Зробіть так, щоб під час руху мишки по сторінці відображалися координати курсору, подібно до того, як це зроблено в наступному зразку:

let elem = document.getElementById('elem');
document.addEventListener('mousemove', function(even) {
    elem.innerHTML = even.clientX + ':' + even.clientY;
})