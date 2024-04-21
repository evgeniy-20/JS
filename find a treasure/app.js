// Отримаємо випадкове число від 0 до size

let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

// Вираховуємо відстань між подією та ціллю

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

// Отримаємо рядок, що покаже відстань

let getDistanceHint = function (distance) {
    if (distance < 10) {
        return 'Boiling hot!';
    } else if (distance < 20) {
        return 'Really hot';
    } else if (distance < 40) {
        return 'Hot';
    } else if (distance < 80) {
        return 'Warm';
    } else if (distance < 160) {
        return 'Cold';
    } else if (distance < 320) {
        return 'Really cold';
    } else {
        return 'Freezing!';
    }
};

// Налаштовуємо наші змінні параметри

let width = 800;
let height = 800;
let clicks = 0;

// Створюємо випадкову локацію target

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// Додаємо мініпулятор кліків до елемента img

$("#map").click(function (event) {
    clicks++;

    // Отримаємо відстань між event і trget

    let distance = getDistance(event, target);

    // Конвертуємо відстань у підказку

    let distanceHint = getDistanceHint(distance);

    // Оновлюємо #distance-елемент новою підказкою

    $("#distance").text(distanceHint);

    // Якщо клік було зроблено достатньо близько, кажемо гравцеві , що він переміг

    if (distance < 8) {
        alert('Find the treasure in ' + clicks + ' clocks!');
    }
});
