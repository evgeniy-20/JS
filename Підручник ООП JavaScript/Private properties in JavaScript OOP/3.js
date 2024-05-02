// Зробіть спосіб, який виведе дані працівника.

class Employee {
    #name
    #salary
    #age
    constructor(name, salary, age) {
        this.#name = name,
            this.#salary = salary,
            this.#age = age
    }

    show() {
        return {
            name: this.#name,
            salary: this.#salary,
            age: this.#age
        };
    }
}

let employee = new Employee('Yevhen', 75000, 26);

console.log(employee.show());
