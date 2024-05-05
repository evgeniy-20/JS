// У класі Employeeв геттері зарплати зробіть так, щоб при читанні зарплати на кінець її значення додавався знак долара.

class Employee {
    #salary;

    setSalary(salary) {
        this.#salary = salary;
    }

    getSalary() {
        // Додавання знака долара до значення зарплати
        return this.#salary + "$";
    }
}

let employee = new Employee();

employee.setSalary(50000);
console.log(employee.getSalary());
