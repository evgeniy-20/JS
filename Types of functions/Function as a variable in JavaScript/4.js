// Запишіть у змінну func число 123, тим самим затерши функцію цієї змінної. Виведіть нове значення змінної func в консоль.

function func() {
    return 'Yevhen';
}

func();

func = 123;

console.log(func);
