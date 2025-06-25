// Модифікуйте попереднє завдання. Зробіть так, щоб під час наступного заходу на сторінку в інпутах стояли збережені в локальному сховищі значення.

const inputs = document.querySelectorAll('input');
const STORAGE_KEY = 'inputValues';

// Відновлюємо значення при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    const savedValues = localStorage.getItem(STORAGE_KEY);
    if (savedValues) {
        const values = JSON.parse(savedValues);
        inputs.forEach((input, index) => {
            if (values[index] !== undefined) {
                input.value = values[index];
            }
        });
    }
});

// Зберігаємо значення після натискання кнопки
document.getElementById('saveBtn').addEventListener('click', () => {
    const values = [];
    inputs.forEach(input => values.push(input.value));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    alert('Значення збережено!');
});
