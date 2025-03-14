// Зробіть функцію func, яка після виклику ось так: func(2)(3)(4)(5)(), поверне масив переданих у параметри чисел.
function func(value) {
    let arr = [value]; // Масив для збереження переданих чисел

    function innerFunc(nextValue) {
        if (nextValue === undefined) {
            return arr; // Якщо викликано без аргументів, повертаємо масив
        }
        arr.push(nextValue); // Додаємо число до масиву
        return innerFunc; // Повертаємо себе для подальшого виклику
    }

    return innerFunc;
}

console.log(func(2)(3)(4)(5)());
