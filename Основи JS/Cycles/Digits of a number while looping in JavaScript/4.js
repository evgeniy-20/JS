// Переберіть циклом числа від 10до 1000 і виведіть ті цифри, сума двох перших цифр яких дорівнює 5.

for (let i = 10; i <= 1000; i++) {
    const numberString = String(i);
    const firstDigit = Number(numberString[0]);
    const secondDigit = Number(numberString[1]);
    if (firstDigit + secondDigit === 5) {
      console.log(i);
    }
  }
  
