// Додайте сетери властивостей у ваш клас Employee.

class Employee {
    #name
    #surn

    setName(name) {
        this.#name = name
    }

    setSurn(surn) {
        this.#surn = surn;
    }

    getName() {
        return this.#name
    }

    getSurn() {
        return this.#surn
    }
}

let employee = new Employee;

employee.setName('Yevhen');
employee.setSurn('Prokopiv');

console.log(employee.getName());
console.log(employee.getSurn());
