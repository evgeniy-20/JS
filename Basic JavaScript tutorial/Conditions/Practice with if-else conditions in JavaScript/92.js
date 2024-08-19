// У змінній month лежить якесь число з інтервалу від 1до 12. Визначте, в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).

let month = 6;
if (month >= 0 && month <= 3) {
    console.log('зима');
} else if (month >= 4 && month <= 6) {
    console.log('весна');
} else if (month >= 7 && month <= 9) {
    console.log('літо');
} else if (month >= 10 && month <= 12) {
    console.log('осінь');
}
