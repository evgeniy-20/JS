// Переберіть циклом числа від 10 до 1000 і виведіть ті цифри, сума двох перших цифр яких дорівнює 5.

for (let i = 10; i < 1000; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    if (sum === 5) {
        console.log(i);
    }
}
