// Як відомо, парні числа діляться на 2 без залишку, а непарні - із залишком. Нехай у вас дано число. За допомогою оператора % і конструкції if перевірте парне це число чи ні.

let num = 15;

if (num % 2 === 0) {
    console.log('Число парне');
} else {
    console.log('Число непарне');
}
