let selectElement = document.querySelector('#language');
let resultElemt = document.querySelector('#result');
selectElement.addEventListener('change', function () {
    let selectedValue = selectElement.value
    resultElemt.textContent = `Ви обрали мову: ${selectedValue}`;
    alert(`Ви обрали мову: ${selectedValue}`)
});
