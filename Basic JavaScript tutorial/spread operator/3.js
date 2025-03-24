// Напиши функцію addProperty(obj, key, value), яка створює новий об'єкт на основі переданого, додаючи до нього нову властивість.

function addProperty(obj, key, value) {
    return { ...obj, [key]: value };
}
const user = { name: "Євген", age: 27 };
console.log(addProperty(user, "job", "Frontend Developer"));
