// Дано наступний масив працівників: Виведіть на екран дані кожного працівника у форматі ім'я-зарплата .

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

for (let empploy of employees) {
    console.log(empploy.name + ': ' + empploy.salary);
}
