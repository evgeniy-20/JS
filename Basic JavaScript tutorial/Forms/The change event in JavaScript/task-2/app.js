// Дано чекбокс. За зміною чебокса виведіть на екран його новий стан.

let checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log('Позначено ✅');
    } else {
        console.log('Знято позначку ❌');
    }
});
