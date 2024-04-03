// Допишіть наступний код так, щоб його запуск виводив суму переданих параметрами чисел:

(function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
})(1, 2, 3);
