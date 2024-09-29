// Дано інпут. У нього вводиться ПІБ через пробіл. ПІБ вводиться з маленької літери. Зробіть так, щоб після втрати фокусу інпутом, введені прізвище, ім'я та по батькові автоматично стали записаними з великої літери (у цьому ж інпуті).

function capitalizeInput() {
    const input = document.getElementById("fullName");
    const words = input.value.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    input.value = words.join(" ");
}
