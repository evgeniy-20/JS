// Дано HTML таблицю. Зробіть так, щоб за кліком на будь-яку комірку в ній з'являвся інпут для редагування тексту цієї комірки.
document.querySelectorAll("td").forEach(cell => {
    cell.addEventListener("click", function () {
        const currentText = cell.innerText;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        cell.innerHTML = "";
        cell.appendChild(input);
        input.focus();

        input.addEventListener("blur", function () {
            cell.innerText = input.value || currentText;
        });

        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                input.blur();
            }
        });
    });
});
