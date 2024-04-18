// Зробіть спосіб, який виведе на екран ім'я працівника.

class Employee {
    show() {
        console.log(this.name)
    }
}

let employee = new Employee;

employee.name = 'Yevhen';

employee.show();
