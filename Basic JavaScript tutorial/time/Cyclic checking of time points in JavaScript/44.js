// Розгляньте період від 2000 року до поточного року. Визначте, скільки разів 1 січня у цьому проміжку попадало на вихідний день, тобто на суботу чи на неділю.

let now = new Date();
let currentYear = now.getFullYear();
let count = 0;
for (let year = 2000; year <= currentYear; year++) {
    let date = new Date(year, 0, 1);
    let day = date.getDay();
    if (day === 6 || day === 0) {
        count++;
    }
}

console.log(`З 2000 року 1 січня припадало на вихідний день ${count} разів`);
