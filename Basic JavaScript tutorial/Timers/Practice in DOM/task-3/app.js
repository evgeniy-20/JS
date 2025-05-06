// Дано інпут із числом. Зробіть так, щоб щосекунди в ньому з'являвся квадрат того числа, яке в ньому записано.

let numberSquare = document.querySelector('#number');
setInterval(() => {
    numberSquare.value = Math.pow(numberSquare.value, 2);
}, 1000);
