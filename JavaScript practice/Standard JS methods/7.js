// Об'єкти: Створи об'єкт, який представляє студента, і напиши метод для виведення його повного імені.
const student = {
    firstName: 'Yevhen',
    lastName: 'Prokopiv',
    age: 27,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(student.getFullName());
