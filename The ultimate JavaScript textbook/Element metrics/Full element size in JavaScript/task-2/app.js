document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Зупиняємо надсилання

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;
        let errorMessage = "";

        if (name.length < 2) {
            isValid = false;
            errorMessage += "Ім’я повинно містити мінімум 2 символи.\n";
        }

        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "Введіть коректний email.\n";
        }

        if (message === "") {
            isValid = false;
            errorMessage += "Повідомлення не може бути порожнім.\n";
        }

        if (!isValid) {
            alert(errorMessage);
        } else {
            alert("Повідомлення надіслано успішно!");
            form.reset();
        }
    });
});
