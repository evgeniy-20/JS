// Модифікуйте створену мною функцію так, щоб параметром вона приймала не id елемента, а довільний CSS селектор.

function setText(selector, text) {
    let elem = document.querySelector(selector);
    elem.textContent = text;
}

setText('.elem1', 'Stas');
setText('.elem2', 'Yura');
