// У наступному коді частини масиву записуються у відповідні змінні: Переробте цей код через деструктуризацію згідно з вивченою теорією.


let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let [name, surname, ...info] = arr

console.log(info);
