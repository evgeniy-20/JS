// Зробіть калькулятор, який знаходитиме площу трикутника за трьома сторонами.

function calculacor() {
    let a = Nymber(document.getElementById('sideA').value);
    let b = Nymber(document.getElementById('sideB').value);
    let c = Nymber(document.getElementById('sideC').value);
    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("result").textContent = "Сторони мають бути більшими за нуль!";
        return;
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    if (isNaN(area) || area <= 0) {
        document.getElementById("result").textContent = "Трикутник з такими сторонами не існує!";
    } else {
        document.getElementById("result").textContent = `Площа трикутника: ${area.toFixed(2)} квадратних одиниць`;
    }
}
