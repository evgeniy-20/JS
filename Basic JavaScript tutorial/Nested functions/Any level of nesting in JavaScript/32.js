// Створіть функцію func, яка при виклику так: func()()()()()()()()()()() повертає '!'.

function func() {
    return function () {
        return function () {
            return function () {
                return '!'
            };
        };
    };
};

console.log(func()()()());
