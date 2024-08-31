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

let sum = 0;

for (let empploy of employees) {
    sum += empploy.salary;
};

console.log(sum);
