// Напишіть код, який порівняє дві наведені нижче дати та виведе повідомлення про те, яка з них більша:

let date1 = '2020-11-31';
let date2 = '2020-12-01';

let d1 = new Date(date1);
let d2 = new Date(date2);

if (d1 > d2) {
    console.log('Date1 is greater than Date2');
} else if (d1 < d2) {
    console.log('Date1 is lss than Date2');
} else {
    console.log('Date1 is equal to Date2');
}
