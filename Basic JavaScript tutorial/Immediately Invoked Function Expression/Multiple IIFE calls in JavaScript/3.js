// Допишіть наступний код так, щоб його запуск виводив суму переданих параметрами чисел:

(function (num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        }
    }
})(1)(2)(3);
