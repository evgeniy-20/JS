// Дано такий масив із працівниками: Виведіть на екран кожного працівника у своєму тезі li тега ul.
let elem = document.querySelector('.elem');

let employees = [
    { name: 'Stas', age: 33, salary: 7000 },
    { name: 'Yura', age: 31, salary: 3500 },
    { name: 'Yevhen', age: 27, salary: 3000 },
];
let ul = document.createElement('ul');

for (let employee of employees) {
    let li = document.createElement('li');
    li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: $${employee.salary}`;
    ul.appendChild(li);
}

elem.appendChild(ul);
