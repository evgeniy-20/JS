// Зробіть метод, який виводитиме ім'я працівника.

class Employee {
    constructor(name) {
        this.name = name;
    }

    show() {
        return this.name;
    }
};

let employee = new Employee('Yevhen');

console.log(employee.show());
