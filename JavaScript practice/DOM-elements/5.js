// Напиши функцію, яка додає новий елемент списку до списку з ID "myList" при кожному натисканні кнопки.

let myList = document.querySelector('#myList');
let onClick = document.querySelector('#onClick');
onClick.addEventListener('click', function () {
    let newList = document.createElement('li');
    myList.appendChild(newList);
})
