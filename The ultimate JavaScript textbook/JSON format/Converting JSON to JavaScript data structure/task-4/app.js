// Дано рядок у форматі JSON, що містить масив з даними працівників: Виведіть цих працівників на екран у вигляді таблиці HTML.


let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let employees = JSON.parse(json);
let table = document.createElement('table');
for (let employee of employees) {
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    nameCell.textContent = employee.name;
    let ageCell = document.createElement('td');
    ageCell.textContent = employee.age;
    let salaryCell = document.createElement('td');
    salaryCell.textContent = employee.salary;
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(salaryCell);
    table.appendChild(row);
}
document.body.appendChild(table);
