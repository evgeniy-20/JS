// Виправте помилку, допущену в такому коді:

function* func() {
    for (let i = 1; i <= 3; i++) {
        yield i;
    }
}

// Перший ітератор
let elems1 = func();
for (let elem of elems1) {
    console.log(elem);
}

// Другий ітератор — створюємо новий
let elems2 = func();
for (let elem of elems2) {
    console.log(elem);
}