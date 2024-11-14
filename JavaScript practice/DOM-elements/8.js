// Напиши функцію, яка додає клас "active" до всіх елементів із класом "item" після натискання кнопки.
document.getElementById("myButton").addEventListener("click", function () {
    const items = document.querySelectorAll(".item");
    items.forEach(item => item.classList.add("active"));
});
