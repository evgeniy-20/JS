// Візьміть рішення попереднього завдання. Переконайтеся, що багаторазове натискання кнопки призводить до прискорення відліку. Виправте цю проблему.

let start = document.querySelector('#start');
start.addEventListener('click', function () {
    let i = 100;
    setInterval(function () {
        console.log(--i);
    }, 1000);
})
