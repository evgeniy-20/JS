// Автор наведеного нижче коду хотів виконати перевірку віку. Код, однак, за будь-якого значення віку виводить у консоль значення undefined. Виправте помилку автора коду. Ось проблемний код:

let age = 21;
let res;

if (age >= 18) {
    if (age <= 23) {
        res = 'от 18 до 23';
    } else {
        res = 'больше 23';
    }
} else {
    res = 'меньше 18';
}

console.log(res);
