// В об'єкт класу Employee запишіть властивості name, ageта salary.
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

// Створюємо новий об'єкт класу Employee з заданими властивостями
let employee = new Employee('Yevhen', 26, 3000);

// Виводимо інформацію про працівника
console.log(employee); // Виведе: Employee { name: 'Yevhen', age: 26, salary: 3000 }
