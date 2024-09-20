// У наступному коді частини об'єкта записуються у відповідні змінні: Переробте цей код через деструктуризацію згідно з вивченою теорією


let options = {
    width: 400,
    height: 500,
};

let { color = 'black', width, height } = options;

console.log(color);
