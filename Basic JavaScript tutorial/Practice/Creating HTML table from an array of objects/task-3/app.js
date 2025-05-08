// Модифікуйте попередню задачу так, щоб за кліком на будь-яку клітинку з віком її вміст збільшувався на 1.

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let table = document.querySelector('#table');

for (let employee of employees) {
    let tr = document.createElement('tr');

    // Ім'я
    let tdName = document.createElement('td');
    tdName.textContent = employee.name;
    tr.appendChild(tdName);

    // Вік
    let tdAge = document.createElement('td');
    tdAge.textContent = employee.age;
    tdAge.addEventListener('click', function () {
        employee.age += 1;
        tdAge.textContent = employee.age;
    });
    tr.appendChild(tdAge);

    // Зарплата
    let tdSalary = document.createElement('td');
    tdSalary.textContent = employee.salary;
    tdSalary.addEventListener('click', function () {
        employee.salary = Math.round(employee.salary * 1.1);
        tdSalary.textContent = employee.salary;
    });
    tr.appendChild(tdSalary);

    table.appendChild(tr);
}
