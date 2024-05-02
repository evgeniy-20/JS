// У наступному коді зробіть допоміжний метод приватним:

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.#addSign(this.salary);
    }

    #addSign(num) {
        return num + '$';
    }
}

let employee = new Employee(3000);

console.log(employee.getSalary());
