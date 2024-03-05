// Дано наступний масив працівників: Виведіть на екран суму зарплат усіх працівників.


let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    totalSalary += employee.salary;
}

console.log(totalSalary);
