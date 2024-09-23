// Напишіть код, який порівняє дві наведені нижче дати та виведе повідомлення про те, яка з них більша:

let date1 = '2020-11-30';
let date2 = '2020-12-01';

const d1 = new Date(date1);
const d2 = new Date(date2);

if (d1 > d2) {
    console.log(`${date1} більше за ${date2}`);
} else if (d1 < d2) {
    console.log(`${date2} більше за ${date1}`);
} else {
    console.log(`${date1} і ${date2} однакові.`);
}
