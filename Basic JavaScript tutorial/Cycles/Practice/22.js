// Модифікуйте попереднє завдання так, щоб зарплата збільшувалася тільки тим працівникам, у яких вона менша чи дорівнює 400.

let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let elem in obj) {
    if (obj[elem] <= 400) {
        obj[elem] *= 1.1;
    }
}

console.log(obj);
