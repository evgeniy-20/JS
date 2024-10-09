//Дано посилання. Зробіть так, щоб після кліка на посилання йому в кінець записувався його href, а переходу за посиланням не відбувалося.
document.querySelector('#myLink').addEventListener('click', function (event) {
    this.textContent += ` (${this.href})`
    event.preventDefault();
})
