// Використовуючи створений вами масив, arr знайдіть суму результатів функцій (без циклу).

let arr = [
    function () { return 1 },
    function () { return 2 },
    function () { return 3 },
];
let res = arr.reduce((acc, currFunc) => acc + currFunc(), 0);
console.log(res);
