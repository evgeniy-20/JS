// У наступному коді частини об'єкта записуються у відповідні змінні: Переробте цей код через деструктуризацію згідно з вивченою теорією.

let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let { colo: c, width: w, height: h } = options;

console.log(w);
