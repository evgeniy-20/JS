// Зробіть 3функції, оголосивши їх як Function Declaration і давши їм імена func1, func2і func3. Нехай перша функція повертає 1, друга - 2, а третя - 3. Передайте ці функції параметром у функцію testпопереднього завдання.

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

test(func1, func2, func3);
