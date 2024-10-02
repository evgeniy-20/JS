// Даний чекбокс. Після зміни чебоксу виведіть на екран його новий стан.
let checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', function () {
    console.log(checkbox.checked);
})
