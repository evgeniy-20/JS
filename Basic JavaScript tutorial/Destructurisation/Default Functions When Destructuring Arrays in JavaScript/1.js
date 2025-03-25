// Модифікуйте отриманий вище код так, щоб за відсутності в масиві значення для місяця за замовчуванням брався поточний місяць, а за відсутності значення для року - відповідно поточний рік.

function func() {
    return (new Date).getDate();
}

let [day = func(), month = (new Date).getMonth() + 1, year = (new Date).getFullYear()] = [, , 2025];
console.log(day, month, year);
