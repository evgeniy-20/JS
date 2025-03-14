// Зробіть функцію func, яка після виклику ось так: func()()()()()()(), поверне '!'.

function func() {
    return function () {
        return function () {
            return function () {
                return function () {
                    return function () {
                        return function () {
                            return '!';
                        }
                    }
                }
            }
        }
    }
}

console.log(func()()()()()()());
