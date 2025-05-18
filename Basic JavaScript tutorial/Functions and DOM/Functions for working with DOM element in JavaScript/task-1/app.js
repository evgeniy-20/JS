// Модифікуйте створену мною функцію так, щоб параметром вона приймала не id елемента, а довільний CSS селектор.

function setText(className, text) {
    let elem = document.querySelector(className);
    elem.textContent = text;
}

setText('.name1', 'Yevhen');
setText('.name2', 'Kristina');
