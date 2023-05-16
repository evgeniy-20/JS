//Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.


const list = document.getElementById('list');
const btnFillArray = document.getElementById('btnFillArray');
const btnFillNumbers = document.getElementById('btnFillNumbers');
const btnAddExclamation = document.getElementById('btnAddExclamation');
const btnAddNumberedItem = document.getElementById('btnAddNumberedItem');
const btnRemoveLastItem = document.getElementById('btnRemoveLastItem');
const btnRemoveRandomItem = document.getElementById('btnRemoveRandomItem');

const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

btnFillArray.addEventListener('click', function () {
  clearList();
  fillList(array);
});

btnFillNumbers.addEventListener('click', function () {
  clearList();
  fillListWithNumbers(10);
});

btnAddExclamation.addEventListener('click', function () {
  const newItem = document.createElement('li');
  newItem.textContent = '!';
  list.appendChild(newItem);
});

btnAddNumberedItem.addEventListener('click', function () {
  const newItem = document.createElement('li');
  newItem.textContent = 'Пункт ' + (list.children.length + 1);
  list.appendChild(newItem);
});

btnRemoveLastItem.addEventListener('click', function () {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
  }
});

btnRemoveRandomItem.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * list.children.length);
  const randomItem = list.children[randomIndex];
  if (randomItem) {
    list.removeChild(randomItem);
  }
});

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function fillList(items) {
  items.forEach(function (item) {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function fillListWithNumbers(count) {
  for (let i = 1; i <= count; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    list.appendChild(li);
  }
}