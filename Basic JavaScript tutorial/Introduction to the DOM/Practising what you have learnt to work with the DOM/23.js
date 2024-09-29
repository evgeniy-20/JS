// Дано 3 інпути, кнопку й абзац. В інпути вводяться коефіцієнти квадратного рівняння. Після натискання на кнопку знайдіть корені цього рівняння та виведіть їх в абзац.

document.querySelector('#calculateButton').addEventListener('click', function () {
    const a = parseFloat(document.querySelector('#a').value); // Коефіцієнт a
    const b = parseFloat(document.querySelector('#b').value); // Коефіцієнт b
    const c = parseFloat(document.querySelector('#c').value); // Коефіцієнт c

    const discriminant = b * b - 4 * a * c; // Обчислюємо дискримінант
    let roots;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        roots = `Корені: x₁ = ${root1.toFixed(2)}, x₂ = ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        roots = `Є один корінь: x = ${root.toFixed(2)}`;
    } else {
        roots = "Немає дійсних коренів.";
    }

    document.querySelector('#rootsOutput').textContent = roots; // Виводимо результат
});
