// Напишіть код, який порівняє дві наведені нижче дати та виведе повідомлення про те, яка з них більша:

let date1 = '09-21';
let date2 = '09-23';
const [month1, day1] = date1.split('-').map(Number);
const [month2, day2] = date2.split('-').map(Number);

if (month1 > month2 || (month1 === month2 && day1 > day2)) {
    console.log(`${date1} більше за ${date2}`);
} else if (month1 < month2 || (month1 === month2 && day1 < day2)) {
    console.log(`${date2} більше за ${date1}`);
} else {
    console.log(`${date1} і ${date2} однакові.`);
}
