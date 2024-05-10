// Даний наступний клас: Зробіть так, щоб у другому та третьому параметрах передавалися об'єкти окремих класів.

class Position {
    constructor(name) {
        this.name = name;
    }
}

class Department {
    constructor(name) {
        this.name = name;
    }
}

class Employee {
    constructor(name, position, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }
}

let position = new Position(5);
let department = new Department('Kiyv');
let employee = new Employee('Yevhen', position, department);

console.log(employee.name, employee.name.position, employee.name.department);
