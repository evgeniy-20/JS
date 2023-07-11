// Дано число з 6цифр. Перевірте, чи сума перших трьох цифр дорівнює сумі других трьох цифр. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'.

let number = 123456;
let digit1 = Math.floor(number / 100000);          
let digit2 = Math.floor((number / 10000) % 10);     
let digit3 = Math.floor((number / 1000) % 10);      
let digit4 = Math.floor((number / 100) % 10);       
let digit5 = Math.floor((number / 10) % 10);        
let digit6 = number % 10;                 

let sum1 = digit1 + digit2 + digit3;              
let sum2 = digit4 + digit5 + digit6;                

if (sum1 === sum2) {
  console.log('да');
} else {
  console.log('нет');
}