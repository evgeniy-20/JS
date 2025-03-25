// У наступному коді частини об'єкта записуються у відповідні змінні: Переробіть цей код через деструктуризацію згідно з вивченою теорією.

let options = {
    width: 400,
    height: 500,
};

let { width, height, color = 'black' } = options;
console.log(width);
console.log(height);
console.log(color);
