// У наступному коді частини масиву записуються у відповідні змінні: Переробте цей код через деструктуризацію згідно з вивченою теорією.

function func() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
}

let [name, surname, department, position, salary] = func();

console.log(position);
