// Автор наведеного нижче коду хотів виконати перевірку віку для досягнення 18 років. Код, однак, за будь-якого значення віку виводить у консоль значення undefined. Виправте помилку автора коду. Ось проблемний код:

let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);