// Зробіть метод, який поверне ініціали студента, тобто перші літери його імені та прізвища.

class Student {
    show() {
        return this.cape(this.name[0]) + this.cape(this.surn[0]);
    }
    cape(str) {
        return str.toUpperCase();
    }
}

let student = new Student;

student.name = 'yevhen';
student.surn = 'prokopiv';

console.log(student.show());
