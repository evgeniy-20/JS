// Напиши функцію cloneObject(obj), яка створює та повертає копію переданого об'єкта, використовуючи spread-оператор.

function cloneObject(obj) {
    return { ...obj };
}

console.log(cloneObject({ name: 'Yevhen', age: 27 }));
