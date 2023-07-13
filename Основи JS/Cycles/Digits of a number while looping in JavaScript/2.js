// Переберіть циклом числа від 10до 1000 та виведіть у консоль суму першої та другої цифри кожного числа.

for (let i = 10; i <= 1000; i++) {
    const numberString = i.toString();
    const firstDigit = parseInt(numberString[0]);
    const secondDigit = parseInt(numberString[1]);
    const sum = firstDigit + secondDigit;
    console.log(`Число: ${i}, Сума: ${sum}`);
  }