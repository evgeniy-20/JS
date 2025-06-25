// Після заходу користувача на сайт запитайте в нього дату народження. При наступному заході користувача на сайт, якщо у нього цього дня буде День Народження - привітайте його з цим святом.

let birthday = localStorage.getItem('userBirthday');
// Перевіряємо, чи дата вже збережена
let savedBirthday = localStorage.getItem(birthday);

if (!savedBirthday) {
  // Запитуємо дату народження у форматі: рік-місяць-день (напр. 1995-06-22)
  let userInput = prompt("Введіть вашу дату народження (у форматі РРРР-ММ-ДД):");

  // Перевірка на правильний формат
  if (userInput && /^\d{4}-\d{2}-\d{2}$/.test(userInput)) {
    localStorage.setItem(birthday, userInput);
    console.log("Дата народження збережена.");
  } else {
    console.log("Невірний формат дати.");
  }
} else {
  // Отримуємо поточну дату
  let today = new Date();
  let [savedYear, savedMonth, savedDay] = savedBirthday.split('-');

  // Порівнюємо місяць і день
  if (
    today.getMonth() + 1 === Number(savedMonth) &&
    today.getDate() === Number(savedDay)
  ) {
    alert("🎉 З Днем народження! Бажаємо щастя, здоров’я та натхнення!");
  } else {
    console.log("Сьогодні не День народження.");
  }
}
