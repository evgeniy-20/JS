// Знайдіть усередині батька елементи з класом wwwі запишіть їх у змінну elems1. Потім знайдіть усередині батька елементи з класом gggі запишіть їх у змінну elems2.

let parent = document.querySelector('#parent');
let elems1 = parent.getElementsByClassName('www');
let elems2 = parent.getElementsByClassName('ggg');
console.log(elems1);
console.log(elems2);
