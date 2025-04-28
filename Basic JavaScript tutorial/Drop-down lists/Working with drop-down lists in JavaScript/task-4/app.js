let myFruit = document.querySelector('#myFruit');
let resultElement = document.querySelector('#result');
myFruit.addEventListener('change', function () {
    let selectedFruit = myFruit.value;
    resultElement.textContent = `You selected: ${selectedFruit}`;
    alert(`You selected: ${selectedFruit}`);
});
