// Визначте, скільки п'ятниць 13у поточному році.

let now = new Date();
let currentYear = now.getFullYear();

let friday13Count = 0;

for (let month = 0; month < 12; month++) {

    let date = new Date(currentYear, month, 13);


    if (date.getDay() === 5) {
        friday13Count++;
    }
}

console.log(`У поточному році є ${friday13Count} п'ятниць 13-го числа.`);
