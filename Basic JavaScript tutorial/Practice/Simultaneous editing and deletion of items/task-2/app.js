// Оберніть спочатку текст абзацу в теги span, додайте до цих тегів можливість редагування, а потім додайте в кінець кожного абзацу посилання на видалення.

const parent = document.getElementById("parent");
const paragraphs = parent.querySelectorAll("p");

paragraphs.forEach(p => {
    // Обертаємо текст абзацу в тег span
    const span = document.createElement("span");
    span.textContent = p.textContent;
    p.textContent = "";
    p.appendChild(span);

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
