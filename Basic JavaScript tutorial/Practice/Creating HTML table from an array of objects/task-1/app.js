// Дано такий масив із працівниками: Виведіть елементи цього масиву у вигляді HTML таблиці.

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let table = document.querySelector('#table');
for (let employe of employees) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('tdName');
    tdName.textContent = employe.name;
    tr.appendChild(tdName);
    let tdAgw = document.createElement('tdAge');
    tdAgw.textContent = employe.age;
    tr.appendChild(tdAgw);
    let tdSalary = document.createElement('tdSalary');
    tdSalary.textContent = employe.salary;
    tr.appendChild(tdSalary);
    table.appendChild(tr);
}
