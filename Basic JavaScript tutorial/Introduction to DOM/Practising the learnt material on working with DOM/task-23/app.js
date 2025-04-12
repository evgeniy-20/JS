let aInput = document.querySelector('#a');
let bInput = document.querySelector('#b');
let cInput = document.querySelector('#c');
let button = document.querySelector('#solveBtn');
let result = document.querySelector('#result');

button.addEventListener('click', () => {
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.textContent = 'Введіть усі коефіцієнти!';
        return;
    }

    if (a === 0) {
        result.textContent = 'Це не квадратне рівняння (a ≠ 0)';
        return;
    }

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = `Два корені: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        result.textContent = `Один корінь: x = ${x.toFixed(2)}`;
    } else {
        result.textContent = 'Коренів немає (дискримінант < 0)';
    }
});
