// Дано кнопку. Зробіть так, щоб ця кнопка вважала кількість кліків по ній, записуючи їх в який-небудь атрибут користувача. Нехай на кліку на іншу кнопку на екран виводиться, скільки кліків було зроблено по першій кнопці.

const countButton = document.getElementById('countButton');
const showClicksButton = document.getElementById('showClicksButton');
const clickCountDisplay = document.getElementById('clickCountDisplay');

// Обробник кліків для першої кнопки
countButton.addEventListener('click', () => {
    clickCount++;
    // Записуємо кількість кліків у атрибут 'data-clicks'
    countButton.setAttribute('data-clicks', clickCount);
});

// Обробник кліків для другої кнопки
showClicksButton.addEventListener('click', () => {
    // Отримуємо значення з атрибуту 'data-clicks'
    const clicks = countButton.getAttribute('data-clicks');
    // Виводимо кількість кліків на екран
    clickCountDisplay.textContent = `Кількість кліків: ${clicks || 0}`;
});
