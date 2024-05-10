// Даний масив із числами. Використовуючи метод, map запишіть у кожен елемент масиву значення цього елемента, помножене на його порядковий номер у масиві.
let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(function (elem, index) {
    return elem * index;
})

console.log(newArr);
