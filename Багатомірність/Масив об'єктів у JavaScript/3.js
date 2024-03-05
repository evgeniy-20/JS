// Дано наступний масив працівників: Виведіть на екран суму зарплат тих працівників, вік яких дорівнює або більше 30років.

let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > 30) {
        let employee = employees[i];
        totalSalary += employee.salary;
    }
}

console.log(totalSalary);
