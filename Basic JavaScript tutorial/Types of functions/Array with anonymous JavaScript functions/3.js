// Використовуючи створений вами масив, arr знайдіть суму результатів функцій (без циклу).

let arr = [
    function () { return 1 },
    function () { return 2 },
    function () { return 3 }
]

console.log(arr[0]() + arr[1]() + arr[2]());
