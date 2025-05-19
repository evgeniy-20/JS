// Дано масив і ul. За допомогою функції appendElem, створеної в попередньому завданні, запишіть кожен елемент масиву в окрему li в цьому ul.

const items = ['яблуко', 'банан', 'вишня'];
function appendElem(container, text) {
    const ul = container.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

const container = document.querySelector('.elem'); // або передай інший елемент

items.forEach(item => appendElem(container, item));
