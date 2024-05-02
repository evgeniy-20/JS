// Зробіть метод, який збільшуватиме зарплату працівника на 10%.

class Employee {
    constructor(salary) {
        this.salary = salary;
    }

    show() {
        return this.salary *= 1.1;
    }
};

let employee = new Employee(5000);

console.log(employee.show());
