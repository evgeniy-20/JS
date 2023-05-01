//Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.

let submit = document.querySelector('#submit');
submit.addEventListener('dblclick', function() {
    console.log('Yevhen Prokopiv');
});

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.

let submit1 = document.querySelector('#submit1');
submit1.addEventListener('mouseover', function() {
    console.log('Yevhen Prokopiv');
});

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.

let submit2 = document.querySelector('#submit2');
submit.addEventListener('mouseout', function() {
    console.log('Yevhen Prokopiv');
});

// Дано кнопку. Після наведення на неї виведіть одне повідомлення, а після виходу з неї - інше.

let submit3 = document.querySelector('#submit3');
submit3.addEventListener('mouseover', function() {
    console.log('Yevhen Prokopiv');
});
submit3.addEventListener('mouseout', function() {
    console.log('Stas Prokopiv');
});