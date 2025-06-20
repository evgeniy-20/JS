// Дано наступний HTML: Отримайте список міст у форматі JSON.

let listItems = document.querySelectorAll('ul li');
let cityList = [];
listItems.forEach(items => {
    cityList.push(items.textContent);
})
let json = JSON.stringify(cityList);
console.log(json);
