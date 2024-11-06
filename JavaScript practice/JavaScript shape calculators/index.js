// Зробіть калькулятор, який знаходитиме площу та периметр квадрата.

function calculate() {
    const sideLength = document.getElementById("sideLength").value;

    if (sideLength <= 0) {
        alert("Довжина сторони повинна бути більшою за нуль.");
        return;
    }

    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;

    document.getElementById("area").textContent = "Площа: " + area;
    document.getElementById("perimeter").textContent = "Периметр: " + perimeter;
}
