//Дан ol: Вставте йому в кінець li із текстом 'item'.

let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';
elem.appendChild(li);

//Дано ol і кнопка: Зробіть так, щоб по кліку на кнопку до кінця списку додавалася liз текстом 'item'.

let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'item';
    elem1.appendChild(li);
})