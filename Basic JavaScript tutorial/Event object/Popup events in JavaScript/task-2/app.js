// Спливати можуть не всі події. Експериментально знайдіть хоча б одну подію, яка не буде спливати.

let input = document.getElementById('input');
let wrapper = document.getElementById('wrapper');

input.addEventListener('focus', function () {
    alert('Input focus');
});

wrapper.addEventListener('focus', function () {
    alert('Wrapper focus');
}, true);
