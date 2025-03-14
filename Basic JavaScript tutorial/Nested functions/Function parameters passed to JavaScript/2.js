// Переробте ваш код так, щоб функція, що передається, була не анонімною, а була визначена як Function Declaration з ім'ям func.
function func(num) {
    return Math.pow(num, 3);
}

function test(callback) {
    console.log(callback(9));
}

test(func);
