// За допомогою JavaScript додай новий параграф із текстом "New paragraph" в кінець елемента з ID "content".

let content = document.querySelector('#content');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let newParagraph = document.createElement('p'); // створюємо новий параграф
    newParagraph.textContent = 'New paragraph' // Додаємо новий текст параграфу
    content.appendChild(newParagraph);
});
