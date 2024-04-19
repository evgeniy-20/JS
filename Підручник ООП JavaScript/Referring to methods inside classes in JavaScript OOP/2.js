// Зробіть допоміжний метод, який отримуватиме перший символ рядка і робитиме його заголовним.

class Student {
    show() {
        return this.cape(this.name);
    }
    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

let student = new Student;

student.name = 'yevhen';
student.surn = '';

console.log(student.show());
