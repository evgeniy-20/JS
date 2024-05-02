// Передайте в конструктор класу Employee ім'я та зарплату працівника.

class Employee {
    constructor(name, salary) {
        console.log(name + ',' + salary);
    }
};

new Employee('Yevhen', 3000);
