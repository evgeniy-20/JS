// Перетворіть функцію , що передається на Function Expression з тим же ім'ям func.

let func = function (num) {
    return num * num * num;
};

function test(func) {
    console.log(func(3));
}

test(func);
