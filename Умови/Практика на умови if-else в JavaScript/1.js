// У змінній month лежить якесь число з інтервалу від 1 до 12. Визначте, у яку пору року потрапляє цей місяць (зима, літо, весна, осінь).

let month = 7;

if (month >= 1 && month <= 2 || month === 12) {
    console.log("Зима");
} else if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Літо");
} else if (month >= 9 && month <= 11) {
    console.log("Осінь");
} else {
    console.log("Неправильне значення місяця");
}
