// Розширення попереднього завдання. Додайте другу кнопку з текстом "Показати", щоб при її натисканні прихований елемент знову з’являвся.

let button1 = document.createElement('button');
button1.textContent = "Приховати";
let button2 = document.createElement('button');
button2.textContent = "Показати";
let paragraph = document.createElement('p');
paragraph.textContent = "Цей текст сховається";
button1.addEventListener('click', function () {
    paragraph.style.display = 'none';
});
button2.addEventListener('click', function () {
    paragraph.style.display = 'block';
});
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(paragraph);
