// Якщо виводити на екран щосекунди поточний момент часу, то можна зробити годинник, що цокає. Реалізуйте такий самий годинник, як показано нижче у зразку:

function updateClock() {
    const now = new Date();

    // Отримуємо години, хвилини, секунди
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Формуємо рядок часу
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Виводимо у елемент
    document.getElementById('clock').textContent = currentTime;
}

// Оновлюємо щосекунди
setInterval(updateClock, 1000);
