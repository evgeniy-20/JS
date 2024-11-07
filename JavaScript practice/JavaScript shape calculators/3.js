// Зробіть калькулятор, який знаходитиме площу кола та довжину кола.

function calculate() {
    let radius = document.getElementById('radius').value;
    if (radius <= 0) {
        alert('Радіус має бути більшим за нуль.');
        return;
    }
    let area = Math.PI * Math.pow(radius, 2);
    let length = 2 * Math.PI * radius;
    document.getElementById('area').innerHTML = `Площа: ${area.toFixed(2)}`;
    document.getElementById('length').innerHTML = `Довжина: ${length.toFixed(2)}`;
}
