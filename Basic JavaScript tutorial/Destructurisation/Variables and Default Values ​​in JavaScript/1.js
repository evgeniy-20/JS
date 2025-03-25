// У наступному коді частини об'єкта записуються у відповідні змінні: Переробіть цей код через деструктуризацію згідно з вивченою теорією.
let options = {
    width: 400,
    height: 500,
};

let { width: w, height: h, color: c = 'black' } = options;

console.log(w); // 400
console.log(h); // 500
console.log(c); // 'black'
