// Зробіть так, щоб сетери класу Employeeможна викликати ланцюжком.

class Employee {
    #name
    #salary
    #age

    setName(name) {
        this.#name = name;
        return this
    }

    setSakary(salary) {
        this.#salary = salary;
        return this
    }

    setAge(age) {
        this.#age = age;
        return this
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }

    getAge() {
        return this.#age;
    }
}

let employee = new Employee;

employee.setName('Yevhen').setSakary(5000).setAge(26);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
