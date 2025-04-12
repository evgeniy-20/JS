// Дано інпут, кнопку й абзац. В інпут вводиться температура в градусах Фаренгейта. За кліком на кнопку виведіть в абзац температуру в градусах Цельсія.
let input = document.querySelector('#fahrenheitInput');
let button = document.querySelector('#convertBtn');
let result = document.querySelector('#result');

button.addEventListener('click', () => {
    let f = parseFloat(input.value);
    if (isNaN(f)) {
        result.textContent = 'Введіть коректне число!';
        return;
    }

    let c = (f - 32) * 5 / 9;
    result.textContent = `Температура в Цельсіях: ${c.toFixed(2)} °C`;
});
