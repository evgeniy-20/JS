// Передайте у ваш тестовий метод ім'я та зарплату працівника.

class Employee {
    show(name, sallary) {
        return name + ', ' + sallary
    }
}

let employee = new Employee;

console.log(employee.show('Yevhen', 3000));
