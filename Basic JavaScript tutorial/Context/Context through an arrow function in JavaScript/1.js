// Візьміть код із попереднього завдання та виправте проблему коду за допомогою вивченого третього способу.
"use strict"

let elem = document.querySelector('#elem');
elem.addEventListener('blur', () => {
    let square = () => {
        return Math.pow(elem.value, 2);
    };
    console.log(square());
});
