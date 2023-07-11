// Дано тризначне число. Знайдіть суму цифр цього числа.

let number = 123;
let digit1 = Math.floor(number / 100);      
let digit2 = Math.floor((number / 10) % 10); 
let digit3 = number % 10;                    
let sum = digit1 + digit2 + digit3;          

console.log(sum);