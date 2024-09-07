// Використовуючи створений вами масив, arr знайдіть суму результатів функцій (без циклу).

let arr = [
    function func1() { return 1 },
    function func2() { return 2 },
    function func3() { return 3 },
]

let result = arr[0]() + arr[1]() + arr[2]();

console.log(result);
