// Зробіть метод, який виводитиме зарплату працівника.

class Employee {
    constructor(salary) {
        this.salary = salary;
    }

    show() {
        return this.salary;
    }
};

let employee = new Employee(5000);

console.log(employee.show());
