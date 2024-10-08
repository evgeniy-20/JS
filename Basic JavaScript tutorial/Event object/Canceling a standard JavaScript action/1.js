//Дано посилання. Зробіть так, щоб після кліка на посилання йому в кінець записувався його href, а переходу за посиланням не відбувалося.
document.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault;
})
