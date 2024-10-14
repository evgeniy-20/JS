// Модифікуйте попереднє завдання так, щоб натиснути на будь-яку комірку із зарплатою її вміст збільшувався на 10%.

let table = document.querySelector('.table');
let employees = [
    { name: 'Stas', age: 33, salary: 7000 },
    { name: 'Yura', age: 30, salary: 10000 },
    { name: 'Yevhen', age: 27, salary: 4000 },
];

for (let employee of employees) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = employee.name;
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = employee.age;
    td2.addEventListener('click', function () {
        this.textContent = Number(this.textContent) + 1;
    })
    tr.appendChild(td2)
    let td3 = document.createElement('td');
    td3.textContent = employee.salary;
    td3.addEventListener('click', function () {
        let currentSalary = Number(this.textContent);
        let increasedSalary = (currentSalary * 1.1).toFixed(2);
        this.textContent = increasedSalary;

    })
    tr.appendChild(td3);
    table.appendChild(tr);
}
