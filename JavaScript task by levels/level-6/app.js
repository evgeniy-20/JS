//Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.

const firstButton = document.getElementById("firstButton");
const list = document.getElementById("list");

const products = ['Хліб', 'Печево', 'Ковбаса', 'Риба', 'Майонез'];

function fillList() {
  // Очищаємо список перед заповненням
  list.innerHTML = '';

  // Проходимося по кожному елементу масиву
  products.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

firstButton.addEventListener('click', fillList);

//По кліку на кнопку створіть HTML таблицю із заданою шириною та висотою.

function createTable() {
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var table = "<table style='width:" + width + "px; height:" + height + "px; border: 1px solid black;'>";

  for (var i = 0; i < height; i++) {
    table += "<tr>";
    for (var j = 0; j < width; j++) {
      table += "<td style='border: 1px solid black;'></td>";
    }
    table += "</tr>";
  }

  table += "</table>";
  document.getElementById("tableContainer").innerHTML = table;
}
