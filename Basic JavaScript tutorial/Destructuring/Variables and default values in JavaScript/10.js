// У наступному коді частини об'єкта записуються у відповідні змінні: Переробте цей код через деструктуризацію згідно з вивченою теорією.


let options = {
    width: 400,
    height: 500,
};
let { color: c = 'black', width: w, height: h } = options;

console.log(c);
console.log(w);
console.log(h);
