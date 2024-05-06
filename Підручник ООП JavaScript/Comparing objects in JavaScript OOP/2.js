// Розкажіть, яким буде результат порівняння у наступному коді:

class Employee {
    constructor(name) {
        this.name = name;
    }
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp1);
