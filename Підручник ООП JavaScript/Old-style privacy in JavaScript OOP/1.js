// У наступному коді зробіть властивості приватними:

class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    getName() {
        return this._name;
    }
    getSalary() {
        return this._salary;
    }
}

let employee = new Employee('Yevhen', 3000);

console.log(employee.getName());
