// Дано 3 кнопки:
/* <input id="button1" type="submit">
<input id="button2" type="submit">
<input id="button3" type="submit">
Зробіть так, щоб при натисканні на першу кнопку на екран виводилося число 1, при натисканні на другу - число 2, а при натисканні на третю - число 3. */

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', function () {
    console.log(1);
})

button2.addEventListener('click', function () {
    console.log(2);
})

button3.addEventListener('click', function () {
    console.log(3);
})
