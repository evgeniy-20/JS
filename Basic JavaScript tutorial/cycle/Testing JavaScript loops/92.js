// Дано наступний об'єкт із працівниками та їх зарплатами: Збільште зарплату кожного працівника на 10 %.


let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let key in obj) {
    obj[key] *= 1.1;
}

console.log(obj);
