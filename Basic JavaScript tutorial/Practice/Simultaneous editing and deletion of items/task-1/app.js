// Додайте посилання на видалення в кінець кожного абзацу. Зробіть так, щоб за кліком на span у ньому з'являвся інпут для редагування.

const parent = document.getElementById("parent");
const paragraphs = parent.querySelectorAll("p");

paragraphs.forEach(p => {
    // Створюємо посилання для видалення
    const removeLink = document.createElement("a");
    removeLink.href = "#";
    removeLink.textContent = " [видалити]";
    removeLink.style.marginLeft = "10px";

    // Обробник події для видалення
    removeLink.addEventListener("click", (e) => {
        e.preventDefault();
        p.remove();
    });

    // Додаємо посилання в кінець абзацу
    p.appendChild(removeLink);

    // Додаємо обробник події для span
    const span = p.querySelector("span");
    span.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        span.replaceWith(input);
        input.focus();

        // Повернути span при втраті фокуса
        input.addEventListener("blur", () => {
            const newSpan = document.createElement("span");
            newSpan.textContent = input.value;
            input.replaceWith(newSpan);

            // Додаємо назад подію редагування
            newSpan.addEventListener("click", arguments.callee);
        });
    });
});
