// Переробте ваш код так, щоб функція, що передається, була не анонімною, а була визначена як Function Declaration з ім'ям func.

function func(num) {
    return num * num * num;
};

function test(func) {
    console.log(func(3));
}

test(func);
