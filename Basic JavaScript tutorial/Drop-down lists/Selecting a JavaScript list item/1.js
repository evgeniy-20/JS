// Даний список, що випадає, і кнопка. Натисніть кнопку, щоб зробити останній пункт списку.

function selectLastItem() {
    const select = document.getElementById('itemSelector');
    select.selectedIndex = select.options.length - 1;
}
