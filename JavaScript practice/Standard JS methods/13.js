// Дано масив об'єктів: Завдання: знайдіть об'єкт із name: "Jane".

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Mike" }
];

let jane = users.find(user => user.name === "Jane");
console.log(jane);
