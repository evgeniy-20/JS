// Дано такий масив із працівниками: Виведіть цих працівників у HTML таблиці.
let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let table = document.querySelector('.table');

for (let employe of employees) {
    let row = document.createElement('tr');
    let coumn = document.createElement('td');
    coumn.innerHTML = employe.name;
    row.appendChild(coumn);
    coumn = document.createElement('td');
    coumn.innerHTML = employe.age;
    row.appendChild(coumn);
    coumn = document.createElement('td');
    coumn.innerHTML = employe.salary;
    row.appendChild(coumn);
    table.appendChild(row);
}
