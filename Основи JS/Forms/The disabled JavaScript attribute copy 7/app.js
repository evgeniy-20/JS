//Даний інпут та кнопка. Після натискання кнопки заблокуйте інпут.

let disabled1 = document.querySelector('#disabled1');
let submit1 = document.querySelector('#submit1'); 
submit1.addEventListener('click', function() {
    disabled1.disabled = true;
})

//Даний інпут та дві кнопки. Нехай натискання на першу кнопку блокує інпут, а натискання на другу – відблокує.

let text = document.querySelector('#text');
let submit2 = document.querySelector('#submit2');
let submit3 = document.querySelector('#submit3');  
submit2.addEventListener('click', function() {
    text.disabled = true;
})
submit3.addEventListener('click', function() {
    text.disabled = false;
})

//Даний інпут та кнопка. Після натискання на кнопку дізнайтеся, заблоковано інпут чи ні.

