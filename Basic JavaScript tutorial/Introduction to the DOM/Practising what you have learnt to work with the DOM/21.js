// Дано інпут, кнопку й абзац. В інпут вводиться температура в градусах Фаренгейта. За кліком на кнопку виведіть в абзац температуру в градусах Цельсія.
document.querySelector('#convertButton').addEventListener('click', function () {
    const fahrenheit = parseFloat(document.querySelector('#fahrenheitInput').value); // Отримуємо температуру в Фаренгейті
    const celsius = (fahrenheit - 32) * 5 / 9; // Конвертуємо в Цельсій
    document.querySelector('#celsiusOutput').textContent = `Температура в °C: ${celsius.toFixed(2)}`; // Виводимо результат
});
