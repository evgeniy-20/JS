// У класі Employeeв сеттері віку зробіть перевірку на те, що вік має бути від 0до 120.

class Employee {
    #age

    setAge(age) {
        // Перевірка, що вік є числом і знаходиться в діапазоні від 0 до 120
        if (typeof age === 'number' && age >= 0 && age <= 120) {
            this.#age = age;
        } else {
            throw new Error('Age is incorrect');
        }
    }

    getAge() {
        return this.#age;
    }
}

let employee = new Employee();

try {
    employee.setAge(26);
    console.log(employee.getAge()); // Виведе 26
    employee.setAge(150); // Викине помилку
} catch (error) {
    console.log(error.message);
}
