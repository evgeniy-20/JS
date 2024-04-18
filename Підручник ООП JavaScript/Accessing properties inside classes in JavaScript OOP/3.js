// Зробіть спосіб, який виведе на екран зарплату працівника.

class Employee {
    show() {
        console.log(this.salary);
    }
}

let employee = new Employee;

employee.salary = 50000;

employee.show();
