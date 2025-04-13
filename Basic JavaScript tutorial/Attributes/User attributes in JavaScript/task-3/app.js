// Дано кнопку. Зробіть так, щоб ця кнопка рахувала кількість кліків по ній, записуючи їх у який-небудь користувацький атрибут. Нехай при натисканні на іншу кнопку на екран виводиться, скільки кліків було зроблено по першій кнопці.
let start = document.querySelector('#start');
let count = document.querySelector('#count');
// Ініціалізуємо атрибут data-clicks з нулем
start.dataset.clicks = 0;

// Обробник для кнопки "Натисни мене"
start.addEventListener('click', function () {
    // Збільшуємо лічильник на 1
    let clicks = Number(this.dataset.clicks) + 1;
    this.dataset.clicks = clicks;
});

// Обробник для кнопки "Показати кількість кліків"
count.addEventListener('click', function () {
    alert(`Кількість кліків: ${start.dataset.clicks}`);
});
