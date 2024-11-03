// Дано такий масив із працівниками: Виведіть на екран кожного працівника у своєму тезі li тега ul.
let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

// Створюємо елемент <ul>
let ul = document.createElement('ul');
document.body.appendChild(ul); // Додаємо <ul> до тіла документа

// Проходимося по кожному працівнику і додаємо його у <li>
employees.forEach(employee => {
    let li = document.createElement('li');
    li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
    ul.appendChild(li); // Додаємо <li> в <ul>
});
