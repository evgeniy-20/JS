// Визначте, скільки п'ятниць 13-ті в поточному році.

let corretnYear = new Date().getFullYear();
let friday13 = 0;
for (let month = 0; month < 12; month++) {
    let date = new Date(corretnYear, month, 13);
    if (date.getDay() === 5) {
        friday13++;
    }
}

console.log(`В ${corretnYear} році ${friday13} п'ятниця 13-ті`);
