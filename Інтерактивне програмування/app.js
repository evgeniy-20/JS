// Затримуємо код за допомогою settimeout

let timeUp = function () {
    alert('Time`s up!');
}

setTimeout(timeUp, 5000);

// Скасовуємо паузу

let doHomeworkAratm = function () {
    alert('Hey! You need to do your homework!');
};

let timeoutId = setTimeout(doHomeworkAratm, 60000);
clearTimeout(timeoutId);

// Викликаємо код декілька разв за допомогою setinerval

let counter = 1;

let printMessege = function () {
    console.log('You have been staring at your console for ' + counter + ' seconds');
    counter++;
}
