// Дано число, наприклад, 12345. Перевірте, що першим символом цього числа є цифра 1, 2або 3. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'.

let number = 12345;
let firstDigit = number.toString()[0];

if (firstDigit === '1' || firstDigit === '2' || firstDigit === '3') {
  console.log('да');
} else {
  console.log('нет');
}