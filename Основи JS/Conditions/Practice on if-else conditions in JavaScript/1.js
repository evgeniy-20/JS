// У змінній month лежить якесь число з інтервалу від 1до 12. Визначте, в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).

let month = 5;

if (month >= 1 && month <= 12) {
    if (month >= 3 && month <= 5) {
      console.log("Весна");
    } else if (month >= 6 && month <= 8) {
      console.log("Літо");
    } else if (month >= 9 && month <= 11) {
      console.log("Осінь");
    } else {
      console.log("Зима");
    }
  } else {
    console.log("Введене число не є допустимим місяцем.");
  }