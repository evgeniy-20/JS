// Дано посилання. Зробіть так, щоб після кліка на посилання йому в кінець записувався його href, а переходу за посиланням не відбувалося.

let link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();
    link.textContent += link.href;
    console.log('Link clicked, default action prevented.');
});
