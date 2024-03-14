//  Зробіть функцію test, параметрами приймаючої 3 функції і суму результатів переданих функцій.

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
