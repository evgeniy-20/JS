// Завдання 2. Встановлення нового атрибута (легкий рівень) Завдання: На сторінці є <a> тег, який не має значення атрибута target. Додайте атрибут target="_blank", щоб посилання відкривалося в новій вкладці.

let elem = document.querySelector('#myLink');
elem.setAttribute('target', '_blank');
