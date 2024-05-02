// У наступному коді зробіть допоміжний метод приватним:

class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    getSalary() {
        return this._addSign(this._salary);
    }

    _addSign(num) {
        return num + '$';
    }
}

let employee = new Employee('Yevhen', 3000);

console.log(employee.getSalary());
