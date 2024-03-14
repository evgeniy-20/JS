// Зробіть 3функції, оголосивши їх як Function Declaration і давши їм імена func1, func2і func3. Нехай перша функція повертає 1, друга - 2, а третя - 3. Передайте ці функції параметром у функцію testпопереднього завдання.
let get1 = function () {
    return 1;
}
let get2 = function () {
    return 2;
}

let get3 = function () {
    return 3;
}

test(get1, get2, get3);

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}
